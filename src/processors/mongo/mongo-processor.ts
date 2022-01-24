import {Db, MongoClient} from 'mongodb';
import {ColumnConfig, Config, TableConfig} from '../../config/types';
import {BaseProcessor} from '../base-processor/base-processor';

export class MongoProcessor extends BaseProcessor {
	private readonly client: MongoClient;
	private db: Db | undefined;

	constructor(config: Config, readonly uri: string) {
		super(config);
		this.client = new MongoClient(this.uri);
	}

	/**
	 * Process the mongo db name
	 *
	 * @param {string} dbName
	 * @return {*}  {Promise<void>}
	 * @memberof MongoProcessor
	 */
	async processDb(dbName: string): Promise<void> {
		try {
			await this.client.connect();
			this.db = this.client.db(dbName);

			// Read collection from config
			if (this?.config?.tables && this.config.tables.length > 0) {
				for await (const table of this.config.tables) {
					await this.processCollection(table);
				}
			}
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await this.client.close();
		}
	}

	/**
	 * Process a table (collection) in mongo db
	 *
	 * @param {TableConfig} tableConfig
	 * @memberof MongoProcessor
	 */
	async processCollection(tableConfig: TableConfig) {
		// Get the collection from the config
		if (this.db && tableConfig.name) {
			await Promise.all(tableConfig.columns.map(async col => this.processDocument(tableConfig.name, col)));
		}
	}

	/**
	 * Process a column (document)
	 *
	 * @param {ColumnConfig} columnConfig
	 * @memberof MongoProcessor
	 */
	async processDocument(tableName: string, columnConfig: ColumnConfig) {
		const cursor = this.db?.collection(tableName).find({});
		const columnName: string = columnConfig.name;

		if (cursor) {
			for await (const doc of cursor) {
				const anonymizedValue: unknown = this.valueAnonymizer.anonymize(doc[columnName], columnConfig.provider) as string;
				await this.db?.collection(tableName).updateOne({_id: doc._id}, {$set: {[columnName]: anonymizedValue}});
			}
		}
	}
}

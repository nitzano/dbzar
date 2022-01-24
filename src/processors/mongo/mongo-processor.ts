import {Db, MongoClient} from 'mongodb';
import {ColumnConfig, Config, TableConfig} from '../../config/types';
import {BaseProcessor, Processor} from '../base-processor/base-processor';

export class MongoProcessor extends BaseProcessor implements Processor {
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
					console.log(`processing ${table.name}`);
					await this.processTable(table);
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
	async processTable(tableConfig: TableConfig) {
		// Get the collection from the config
		if (this.db) {
			const table = this.db.collection(tableConfig.name);
			console.log(tableConfig.name);
			console.log(table.dbName);

			await Promise.all(tableConfig.columns.map(async col => this.processColumn(col)));
		}
	}

	/**
	 * Process a column (document)
	 *
	 * @param {ColumnConfig} columnConfig
	 * @memberof MongoProcessor
	 */
	async processColumn(columnConfig: ColumnConfig) {
		console.log(columnConfig.name);
	}
}

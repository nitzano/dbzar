import {Db, MongoClient} from 'mongodb';
import {Config, TableConfig} from '../../config/types';
import {ProviderType} from '../../types/types';
import {BaseProcessor, Processor} from '../base-processor/base-processor';

export class MongoProcessor extends BaseProcessor implements Processor {
	/**
	 * Process the mongo db name
	 *
	 * @param {string} dbName
	 * @return {*}  {Promise<void>}
	 * @memberof MongoProcessor
	 */
	async processDb(config: Config, dbName?: string): Promise<void> {
		const client = new MongoClient(this.uri);
		let db: Db | undefined;
		try {
			await client.connect();
			db = client.db(dbName);

			// Read collection from config
			if (config?.tables && config.tables.length > 0) {
				for await (const table of config.tables) {
					await this.processCollection(db, table);
				}
			}
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.close();
		}
	}

	/**
	 * Process a table (collection) in mongo db
	 *
	 * @param {TableConfig} tableConfig
	 * @memberof MongoProcessor
	 */
	async processCollection(db: Db, tableConfig: TableConfig) {
		// Get the collection from the config
		if (db && tableConfig.name) {
			await Promise.all(
				tableConfig.columns.map(async (col) =>
					this.processDocument(db, tableConfig.name, col.name, col.provider),
				),
			);
		}
	}

	/**
	 * Process a column (document)
	 *
	 * @param {ColumnConfig} columnConfig
	 * @memberof MongoProcessor
	 */
	async processDocument(
		db: Db,
		tableName: string,
		columnName: string,
		provider: ProviderType,
	) {
		const cursor = db?.collection(tableName).find({});

		if (cursor) {
			for await (const doc of cursor) {
				const anonymizedValue: unknown = this.valueAnonymizer.anonymize(
					doc[columnName],
					provider,
				) as string;
				await db
					?.collection(tableName)
					.updateOne({_id: doc._id}, {$set: {[columnName]: anonymizedValue}});
			}
		}
	}

	async processColumn(
		tableName: string,
		columnName: string,
		provider: ProviderType,
		dbName?: string,
	) {
		const client = new MongoClient(this.uri);
		let db: Db | undefined;
		try {
			await client.connect();
			db = client.db(dbName);

			// Process column
			await this.processDocument(db, tableName, columnName, provider);
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.close();
		}
	}
}

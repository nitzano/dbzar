import {MongoClient} from 'mongodb';
import {ColumnConfig, Config, TableConfig} from '../../config/types';

export class MongoProcessor {
	private readonly client: MongoClient;

	constructor(private readonly uri: string, private readonly config: Config) {
		this.client = new MongoClient(this.uri);
	}

	async processDb(dbName: string): Promise<void> {
		try {
			await this.client.connect();
			console.log('Connected to server');

			const db = this.client.db(dbName);

			const collections = db.listCollections();
			console.log(`collections = ${JSON.stringify(collections.map(({name}) => name))}`);
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
		console.log(tableConfig.name);

		// Process every document
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

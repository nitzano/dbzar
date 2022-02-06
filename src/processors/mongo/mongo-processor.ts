import {Db, MongoClient} from 'mongodb';
import {Anonymizer} from '../../anonymizers';
import {debugLogger} from '../../services/loggers/debug-logger';
import {BaseProcessor, Processor} from '../base-processor/base-processor';

const logger = debugLogger.extend('mongo-processor');
export class MongoProcessor extends BaseProcessor implements Processor {
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
		anonymizer: Anonymizer,
	) {
		const cursor = db?.collection(tableName).find({});

		if (cursor) {
			for await (const doc of cursor) {
				const anonymizedValue: unknown = anonymizer.anonymize(
					doc[columnName],
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
		anonymizer: Anonymizer,
		dbName?: string,
	) {
		logger('processColumn');
		const client = new MongoClient(this.uri);
		let db: Db | undefined;
		try {
			await client.connect();
			db = client.db(dbName);

			// Process column
			await this.processDocument(db, tableName, columnName, anonymizer);
		} catch (error: unknown) {
			console.error(error);
		} finally {
			await client.close();
		}
	}
}

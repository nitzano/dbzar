import knex, {type Knex} from 'knex';
import {type Anonymizer} from '../../../anonymizers/types/anonymizer.type';
import {debugLogger} from '../../../common/services/loggers/debug-logger';
import {BaseProcessor} from '../../base-processor/base-processor';
import {type DatabaseProcessor} from '../../base-processor/database-processor';

const logger = debugLogger.extend('mariadb-processor');

export class MariaDbProcessor
	extends BaseProcessor
	implements DatabaseProcessor
{
	/**
	 * Process a column (document)
	 *
	 * @param {ColumnConfig} columnConfig
	 * @memberof MongoProcessor
	 */
	async processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		_dbName?: string,
	) {
		const client: Knex = this.buildClient(this.uri);

		logger(`processing column`);
		try {
			await this.updateColumn(client, tableName, columnName, anonymizer);
		} finally {
			await client.destroy();
		}
	}

	async updateColumn(
		client: Knex,
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		_dbName?: string,
	) {
		logger(`processing column`);
		// TODO: update in bulk
		logger(`processing column: ${tableName}.${columnName}`);

		const rows = await client(tableName).select([
			`id`,
			`${columnName} as ${columnName}`,
		]);
		logger(`rows = ${JSON.stringify(rows, null, 2)}`);

		await Promise.all(
			rows.map(async ({id, [columnName]: col}) => {
				const rowId: string = id as string;

				logger(`anonymizing ${col as string}`);
				const anonymizedValue: unknown = anonymizer.anonymize(col) as string;
				if (!client) return;
				logger(
					`updating ${tableName}.${columnName}.${rowId} to ${
						anonymizedValue as string
					}`,
				);
				await client(tableName)
					.where({id: rowId})
					.update({[columnName]: anonymizedValue});
			}),
		);
	}

	private buildClient(connectionString: string): Knex {
		return knex({
			client: 'mysql',
			connection: connectionString,
		});
	}
}

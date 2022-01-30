import knex, {Knex} from 'knex';
import {ColumnConfig, Config, TableConfig} from '../../config/types';
import {debugLogger} from '../../services/loggers/debug-logger';
import {BaseProcessor, Processor} from '../base-processor/base-processor';

const logger = debugLogger.extend('postgress-processor');

export class PostgresProcessor extends BaseProcessor implements Processor {
	knexClient: Knex | undefined;

	constructor(config: Config, uri: string) {
		super(config);

		this.knexClient = this.buildClient(uri);
	}

	/**
	 * Process the mongo db name
	 *
	 * @param {string} dbName
	 * @return {*}  {Promise<void>}
	 * @memberof MongoProcessor
	 */
	async processDb(_dbName?: string): Promise<void> {
		logger(`processing db`);
		if (!this.knexClient) return;

		if (this?.config?.tables && this.config.tables.length > 0) {
			for await (const table of this.config.tables) {
				logger(`prcocessing ${table.name}`);
				await this.processTable(table);
			}
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
		if (this.knexClient && tableConfig.name) {
			logger(`processing table ${tableConfig.name}`);
			await Promise.all(
				tableConfig.columns.map(async (col) =>
					this.processColumn(tableConfig.name, col),
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
	async processColumn(tableName: string, columnConfig: ColumnConfig) {
		// TODO: update in bulk
		if (this.knexClient) {
			const columnName: string = columnConfig.name;

			logger(`processing column: ${tableName}.${columnName}`);

			const rows = await this.knexClient(tableName).select([
				`id`,
				`${columnName} as ${columnName}`,
			]);
			logger(`rows = ${JSON.stringify(rows, null, 2)}`);

			await Promise.all(
				rows.map(async ({id, [columnName]: col}) => {
					const rowId: string = id as string;

					logger(
						`anonymizing ${col as string} provider=${columnConfig.provider}`,
					);
					const anonymizedValue: unknown = this.valueAnonymizer.anonymize(
						col,
						columnConfig.provider,
					) as string;
					if (!this.knexClient) return;
					logger(
						`updating ${tableName}.${columnName}.${rowId} to ${
							anonymizedValue as string
						}`,
					);
					await this.knexClient(tableName)
						.where({id: rowId})
						.update({[columnName]: anonymizedValue});
				}),
			);
		}
	}

	private buildClient(connectionString: string): Knex {
		return knex({
			client: 'pg',
			connection: {connectionString},
		});
	}
}

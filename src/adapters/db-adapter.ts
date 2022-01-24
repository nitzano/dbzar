export abstract class DbAdapter {
	abstract anonymizeRecord(record: string): string;
}

import {type ProviderType} from '../types/provider.type';

export abstract class BaseAnonymizer {
	abstract name: ProviderType;

	anonymizeString?(value: string): string;
	anonymizeNumber?(value: number): number;
	anonymizeBoolean?(value: boolean): boolean;

	anonymize(value: any): any {
		switch (typeof value) {
			case 'string':
				if (this.anonymizeString) {
					return this.anonymizeString(value);
				}

				break;

			case 'number':
				if (this.anonymizeNumber) {
					return this.anonymizeNumber(value);
				}

				break;

			case 'boolean':
				if (this.anonymizeBoolean) {
					return this.anonymizeBoolean(value);
				}

				break;

			default:
				return value;
		}

		return value;
	}
}

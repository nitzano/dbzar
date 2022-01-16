type InputValue = number | string | boolean;

export class BaseAnonymizer {
	anonymize(value: InputValue): InputValue {
		switch (typeof (value)) {
			case 'string':
				return this.anonymizeString(value);
			case 'number':
				return this.anonymizeNumber(value);
			case 'boolean':
				return this.anonymizeBoolean(value);
			default:
				return value;
		}
	}

	anonymizeString(value: string): string {
		return value;
	}

	anonymizeNumber(value: number): number {
		return value;
	}

	anonymizeBoolean(value: boolean): boolean {
		return value;
	}
}

export class BaseAnonymizer {
	constructor(private readonly config: any) {}

	anonymizeString(value: string): string {
		return value;
	}

	anonymizeNumber(value: number): number {
		return value;
	}
}

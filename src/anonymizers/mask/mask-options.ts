export interface MaskOptions {
	// Character to replace
	character: string;
	// Do not mask these charcters
	excludeCharacters?: string[];
	// Do not exclude from end
	excludeEndCount?: number;
	// Do not exclude from start
	excludeStartCount?: number;
}

export const defaultMaskConfig: MaskOptions = {
	character: '*',
};

export interface MaskOptions {
	character: string;
	exclude?: string;
	excludeEnd?: number;
	excludeStart?: number;
}

export const defaultMaskConfig: MaskOptions = {
	character: '*',
};

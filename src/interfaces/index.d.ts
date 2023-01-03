export type ReactSelectOption = { value: string | number; label: string | number | boolean | Date };

export interface File extends Blob {
	readonly name?: string;
	id?: string | number;
	preview?: string;
}

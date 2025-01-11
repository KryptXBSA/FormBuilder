export type Prettify<T> = {
	[K in keyof T]: T[K];
} extends infer O
	? { [K in keyof O]: O[K] }
	: never;

export interface Stat {
	id: string;
	value: number;
	prefix?: string;
	suffix: string;
	label: string;
}

/**
 * Placeholder data — replace with verified, up-to-date company figures
 * before launch. Kept as a structured object for easy replacement.
 */
export const stats: Stat[] = [
	{ id: 'customers', value: 1, suffix: 'K+', label: 'Customers Supported' },
	{
		id: 'financing',
		value: 1,
		prefix: 'GHS ',
		suffix: 'M+',
		label: 'Financing Facilitated',
	},
	{ id: 'decision', value: 10, suffix: 'hrs', label: 'Fastest Decision Time' },
	{
		id: 'satisfaction',
		value: 95,
		suffix: '%',
		label: 'Customer Satisfaction',
	},
];

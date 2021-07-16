import { Option } from './option';

export type F = {
	name: string;
	description?: string;
	defaultOption?: Option; // Defalut is 'enable',
	options?: Option[]; // Default is ['enable', 'disable']
	init: (option: Option) => Promise<void>;
};

export type Feature = Required<F>;

export const createFeature = (feature: F): Feature => ({
	description: '',
	defaultOption: 'enable',
	options: ['enable', 'disable'],
	...feature
});

import { Option } from './option';

export type Feature = {
	name: string;
	description?: string;
	defaultOption?: Option; // Defalut is 'enable',
	options?: Option[]; // Default is ['enable', 'disable']
	init: (option: Option) => Promise<void>;
};

export type F = Required<Feature>;

export const createFeature = (feature: Feature): F => ({
	description: '',
	defaultOption: 'enable',
	options: ['enable', 'disable'],
	...feature
});

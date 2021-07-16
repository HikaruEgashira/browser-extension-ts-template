import { createFeature, Feature } from '../domains/feature';

const feature: Feature = {
	name: 'hello',
	init: async () => {
		console.log('hello');
	}
};

export default createFeature(feature);

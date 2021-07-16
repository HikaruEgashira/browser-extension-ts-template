import { createFeature } from '../domains/feature';

const feature = createFeature({
	name: 'hello',
	init: async option => {
		console.log(`awesome extension is ${option}!`);
	}
});

export default feature;

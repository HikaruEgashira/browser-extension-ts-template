import { createFeature } from '../domains/feature';
import * as pageDetect from '../interface/page-detect';

const feature = createFeature({
	name: 'hello',
	include: [pageDetect.isTrue],
	init: async option => {
		console.log(`awesome extension is ${option}!`);
	}
});

export default feature;

import React from 'dom-chef';
import select from 'select-dom';

import { createFeature } from '../domains/feature';

const feature = createFeature({
	name: 'widget',
	description: 'Inserts widget after the last child of body',
	init: async () => {
		const date = new Date();
		select('body')!.append(<div className="widget">{date.toString()}</div>);
	}
});

export default feature;

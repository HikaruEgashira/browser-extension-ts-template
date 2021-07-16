import React from 'dom-chef';
import select from 'select-dom';

import { createFeature, Feature } from '../domains/feature';

const feature: Feature = {
	name: 'widget',
	description: 'Inserts widget after the last child of body',
	init: async () => {
		select('body')!.append(<div className="widget">Hello</div>);
	}
};

export default createFeature(feature);

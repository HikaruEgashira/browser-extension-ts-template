import React from 'dom-chef';
import select from 'select-dom';

import { createFeature } from '../domains/feature';
import * as PageDetect from '../interface/page-detect';

const getDateString = (date: Date) =>
	`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const feature = createFeature({
	name: 'widget',
	description: 'Inserts widget after the last child of body',
	include: [PageDetect.isTrue],
	init: async () => {
		const date = getDateString(new Date());
		select('body')!.append(<div className="wext__widget">{date}</div>);
	}
});

export default feature;

// Don't forget to import this wherever you use it
// @ts-expect-error
import browser from 'webextension-polyfill-ts';
import select from 'select-dom';
import React from 'dom-chef';

import optionsStorage from './options-storage';
import { featureList } from './features';

select('#options-form')?.append(
	<>
		{featureList.map(feature => {
			return (
				<div>
					<span>{feature.name}</span>
					<select name={feature.name} id={feature.name}>
						{feature.options?.map(v => (
							<option value={v}>{v}</option>
						))}
					</select>
				</div>
			);
		})}
	</>
);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
optionsStorage.syncForm('#options-form');

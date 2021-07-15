// Don't forget to import this wherever you use it
// @ts-expect-error
import browser from 'webextension-polyfill-ts';

import optionsStorage from './options-storage';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
optionsStorage.syncForm('#options-form');

const element = {
	rangeInputs: Array.from(
		document.querySelectorAll('input[type="range"][name^="color"]')
	),
	numberInputs: Array.from(
		document.querySelectorAll('input[type="number"][name^="color"]')
	),
	output: document.querySelector('.color-output')
};

const event = {
	updateColor: () => {
		// @ts-expect-error
		element.output.style.backgroundColor = `rgb(${
			element.rangeInputs[0]?.value ?? '0'
		}, ${element.rangeInputs[1]?.value ?? '0'}, ${
			element.rangeInputs[2]?.value ?? '0'
		})`;
	},

	updateInputField: (event: Event) => {
		// @ts-expect-error
		element.numberInputs[
			element.rangeInputs.indexOf(event.currentTarget as any)
		].value = (event.currentTarget as any).value;
	}
};

element.rangeInputs.forEach(input => {
	input.addEventListener('input', event.updateColor);
	input.addEventListener('input', event.updateInputField);
});

window.addEventListener('load', event.updateColor);

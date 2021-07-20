import OptionsSync from 'webext-options-sync';
import { featureList } from '../features';

const featureOptionList = Object.fromEntries(
	featureList.map(feature => [feature.name, feature.defaultOption])
);

const optionSync = new OptionsSync({
	defaults: {
		colorRed: 244,
		colorGreen: 67,
		colorBlue: 54,
		...featureOptionList
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true
});

export default optionSync;

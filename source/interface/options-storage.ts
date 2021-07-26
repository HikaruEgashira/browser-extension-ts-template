import OptionsSync from 'webext-options-sync';
import { featureList } from '../features';

const featureOptionList = Object.fromEntries(
	featureList.map(feature => [feature.name, feature.defaultOption])
);

const optionSync = new OptionsSync({
	defaults: {
		...featureOptionList
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true
});

export default optionSync;

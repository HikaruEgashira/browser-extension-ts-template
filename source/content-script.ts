import { Option } from './domains/option';
import { featureList } from './features';
import optionsStorage from './options-storage';

export type OptionHandler = (
	option: Option,
	callback: (option: Option) => Promise<void>
) => Promise<void>;
const optionHandler: OptionHandler = async (option, callback) => {
	if (option !== 'disable') {
		await callback(option);
	}
};

featureList
	.filter(() => true)
	.forEach(async feature => {
		const storage = await optionsStorage.getAll();
		if ((storage as any)[feature.name]) {
			const option = (storage as any)[feature.name];
			await optionHandler(option, feature.init);
		}
	});

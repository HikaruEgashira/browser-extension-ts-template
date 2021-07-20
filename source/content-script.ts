import { Feature } from './domains/feature';
import { Option } from './domains/option';
import { featureList } from './features';
import optionsStorage from './interface/options-storage';

export type OptionHandler = (option: Option, feature: Feature) => Promise<void>;
const optionHandler: OptionHandler = async (option, feature) => {
	const isTargetUrl = feature.include.some(detect => detect(location));
	if (option !== 'disable' && isTargetUrl) {
		await feature.init(option);
	}
};

featureList
	.filter(() => true)
	.forEach(async feature => {
		const storage = await optionsStorage.getAll();
		if ((storage as any)[feature.name]) {
			const option = (storage as any)[feature.name];
			await optionHandler(option, feature);
		}
	});

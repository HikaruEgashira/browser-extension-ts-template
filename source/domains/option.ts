export type Option<A = never> = 'enable' | 'disable' | A;

export const defaultOption: Option = 'enable';
export const options: Option[] = ['enable', 'disable'];

export type FilterTabs = 'all' | 'hospitality' | 'transportation' | 'retail-stores' | 'education' | 'fashion' | 'online-store';

export const HomeFilterOptions: {
  title: string;
  value: FilterTabs;
}[] = [
  { title: 'All', value: 'all' },
  { title: 'Retail Stores', value: 'retail-stores' },
  { title: 'Transportation', value: 'transportation' },
  { title: 'Education', value: 'education' },
  { title: 'Fashion', value: 'fashion' },
  { title: 'Online store', value: 'online-store' },
    { title: 'Hospitality', value: 'hospitality' },
];

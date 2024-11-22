import { MenuModel } from 'models';

import { Select, Option } from './form.styles';
import { useFormContext } from './form.component';

export function SortWidget() {
  const { sortBy, onSort } = useFormContext();

  return (
    <Select name="sort" value={sortBy} onChange={onSort}>
      <Option value="">Sort by: our top picks</Option>
      <Option value={MenuModel.SORT_BY.price_asc}>Price (lowest first)</Option>
      <Option value={MenuModel.SORT_BY.price_desc}>Price (highest first)</Option>
    </Select>
  );
}

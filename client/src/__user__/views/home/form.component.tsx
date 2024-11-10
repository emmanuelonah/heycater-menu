import { useMemo } from 'react';

import { SortByType } from 'models';
import { createContext } from 'utils';

import { Wrapper } from './form.style';
import { SortWidget } from './sort-widget.component';
import { SearchWidget } from './search-widget.component';

type FormContextType = {
  search: string;
  sortBy: SortByType;
  onSearch(ev: React.ChangeEvent<HTMLInputElement>): void;
  onSort(ev: React.ChangeEvent<HTMLSelectElement>): void;
};

const [FormProvider, useFormContext] = createContext<FormContextType>('FormContext');

interface FormPropTypes extends FormContextType {
  children: React.ReactElement;
}
function Root({ children, ...restProps }: FormPropTypes) {
  const value = useMemo(() => ({ ...restProps }), [restProps]);

  return <FormProvider value={value}>{children}</FormProvider>;
}

function Body() {
  return (
    <Wrapper>
      <SortWidget />
      <SearchWidget />
    </Wrapper>
  );
}

export { useFormContext };

export default {
  Root,
  Body,
};

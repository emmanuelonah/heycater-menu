import { useFormContext } from './form.component';
import { SearchField, SearchWidgetContainer } from './form.style';

export function SearchWidget() {
  const { search, onSearch } = useFormContext();

  return (
    <SearchWidgetContainer>
      <SearchField
        type="search"
        name="search"
        placeholder="Search menu by name"
        value={search}
        onChange={onSearch}
        required
      />
    </SearchWidgetContainer>
  );
}

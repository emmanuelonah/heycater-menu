import { useState, useCallback, useMemo } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { MenuResponse, MenuErrorResponse } from 'MenuTypes';

import { MenuModel, SortByType } from './index.model';

const GET_MENU_QUERY_KEY = 'get_menus';

function useGetMenuPresenter() {
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortByType>('' as SortByType);

  const onSearch = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  }, []);

  const onSort = useCallback((ev: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(ev.target.value as SortByType);
  }, []);

  const { isLoading, isError, error, data } = useQuery<
    AxiosResponse<MenuResponse[], unknown>,
    AxiosError<MenuErrorResponse>,
    AxiosResponse<MenuResponse[], unknown>
  >({
    queryKey: [GET_MENU_QUERY_KEY, search, sortBy],
    queryFn: () => {
      const searchQuery = search ? `search=${search}` : '';
      const sortByQuery = sortBy ? `sort=${sortBy}` : '';
      const query = [searchQuery, sortByQuery].filter(Boolean).join('&');

      return MenuModel.getMenus(query);
    },
    retry: 2,
  });

  const errors = error?.response?.data?.errors;

  const processedError = useMemo(() => {
    if (!isError) return null;

    if (errors?.length) return errors.join(', and');

    return 'An error occurred. Try again later';
  }, [errors, isError]);

  return {
    isLoading,
    isError,
    data: data?.data,
    error: processedError,
    search,
    sortBy,
    onSearch,
    onSort,
  };
}

export { GET_MENU_QUERY_KEY, useGetMenuPresenter };

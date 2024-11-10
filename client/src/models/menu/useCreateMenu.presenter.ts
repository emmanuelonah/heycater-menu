import React, { useMemo } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MenuRequest, MenuResponse, MenuErrorResponse } from 'MenuTypes';

import { MenuModel } from './index.model';
import { GET_MENU_QUERY_KEY } from './useGetMenu.presenter';

const CREATE_MENU_QUERY_KEY = 'create_menu';

function useCreatePresenter() {
  const queryClient = useQueryClient();

  const { error, isPending, isSuccess, isError, mutate } = useMutation<
    AxiosResponse<MenuResponse, unknown>,
    AxiosError<MenuErrorResponse>,
    MenuRequest
  >({
    mutationKey: [CREATE_MENU_QUERY_KEY],
    mutationFn: MenuModel.createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MENU_QUERY_KEY], exact: true });
    },
    retry: false,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as MenuRequest;

    mutate(data);
    event.currentTarget.reset();
  };

  const errors = error?.response?.data?.errors;

  const processedError = useMemo(() => {
    if (!isError) return null;

    if (!errors?.length) return ['An error occurred. Try again later'];

    return errors;
  }, [errors, isError]);

  return { isPending, isSuccess, isError, error: processedError, onSubmit };
}

export { CREATE_MENU_QUERY_KEY, useCreatePresenter };

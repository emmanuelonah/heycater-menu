import React from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MenuRequest, MenuResponse, MenuErrorResponse } from 'MenuTypes';

import { MenuModel } from './index.model';
import { GET_MENU_QUERY_KEY } from './useGetMenu.presenter';

export function useCreatePresenter() {
  const queryClient = useQueryClient();

  const { error, isPending, isSuccess, isError, mutate } = useMutation<
    AxiosResponse<MenuResponse, unknown>,
    AxiosError<MenuErrorResponse>,
    MenuRequest
  >({
    mutationFn: MenuModel.createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MENU_QUERY_KEY], exact: true });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as MenuRequest;

    mutate(data);
    event.currentTarget.reset();
  };

  const errorResponse = error?.response?.data;

  return { isPending, isSuccess, isError, error: errorResponse, onSubmit };
}

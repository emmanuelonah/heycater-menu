import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MenuRequest } from 'MenuTypes';

import { MenuModel } from './index.model';
import { GET_MENU_QUERY_KEY } from './useGetMenu.presenter';

export function useCreatePresenter() {
  const queryClient = useQueryClient();

  const { error, isPending, isSuccess, isError, mutate } = useMutation({
    mutationFn: MenuModel.createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_MENU_QUERY_KEY], exact: true });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    mutate(data as unknown as MenuRequest);
    event.currentTarget.reset();
  };

  return { isPending, isSuccess, isError, error, onSubmit };
}

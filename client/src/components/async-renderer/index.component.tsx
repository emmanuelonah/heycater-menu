import React from 'react';

import IcnEmptyMenu from 'design-system/assets/icn-empty-menu.png';

import { Loader, ErrorText } from 'components';

import { EmptyImage } from './index.styles';

type AsyncRendererPropTypes<DataType> = {
  isLoading: boolean;
  hasData: boolean;
  data?: DataType;
  error?: string | null;
  loader?: React.ReactNode;
  children(data?: DataType): React.ReactNode;
};

export function AsyncRenderer<DataType>({
  isLoading,
  error,
  data,
  hasData,
  children,
  loader,
}: AsyncRendererPropTypes<DataType>) {
  if (isLoading) return <Loader isLoading={isLoading} loader={loader} />;

  if (error) return <ErrorText>{error}</ErrorText>;

  if (!hasData) return <EmptyImage src={IcnEmptyMenu} alt="No data" />;

  return <>{children(data)}</>;
}

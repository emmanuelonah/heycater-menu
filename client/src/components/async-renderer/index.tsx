import React from 'react';

import { Loader, ErrorText } from 'components';

type AsyncRendererPropTypes<DataType> = {
  data: DataType;
  hasData: boolean;
  isLoading: boolean;
  error: string | null;
  children(data: DataType): React.ReactNode;
};

export function AsyncRenderer<DataType>({
  isLoading,
  error,
  data,
  hasData,
  children,
}: AsyncRendererPropTypes<DataType>) {
  if (isLoading) return <Loader isLoading={isLoading} />;

  if (error) return <ErrorText>{error}</ErrorText>;

  if (!hasData) return <ErrorText>No data 📦</ErrorText>;

  return children(data);
}

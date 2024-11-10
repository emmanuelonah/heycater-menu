import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { AsyncRenderer } from './index.component';

export default {
  title: 'Components/AsyncRenderer',
  component: AsyncRenderer,
} as Meta<typeof AsyncRenderer>;

export const Loading: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer hasData={false} isLoading>
    {() => null}
  </AsyncRenderer>
);

export const Error: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer isLoading={false} hasData={false} error="Something went wrong">
    {() => null}
  </AsyncRenderer>
);

export const NoData: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer isLoading={false} hasData={false}>
    {() => null}
  </AsyncRenderer>
);

export const Children: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer isLoading={false} data={{ message: 'Hello, world!' }} hasData>
    {(data) => <div>{data?.message}</div>}
  </AsyncRenderer>
);

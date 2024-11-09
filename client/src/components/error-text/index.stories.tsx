import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { ErrorText, ListError } from './index.component';

export default {
  title: 'Components/ErrorText',
  component: ErrorText,
} as Meta<typeof ErrorText>;

export const Primary: StoryFn<typeof ErrorText> = () => (
  <ErrorText>Error connecting to the server</ErrorText>
);

export const Secondary: StoryFn<typeof ListError> = () => (
  <div style={{ backgroundColor: 'red' }}>
    <ListError errors={['Error connecting to the server', 'Error connecting to the server']} />
  </div>
);

import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { IconLogo } from './index.svg';

export default {
  title: 'Assets/IconLogo',
  component: IconLogo,
} as Meta<typeof IconLogo>;

export const Primary: StoryFn<typeof IconLogo> = () => <IconLogo />;

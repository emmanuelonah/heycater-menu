import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { SkeletonUI } from './skeleton-ui.component';

export default {
  title: 'Components/SkeletonUI',
  component: SkeletonUI,
} as Meta<typeof SkeletonUI>;

export const Primary: StoryFn<typeof SkeletonUI> = () => <SkeletonUI />;

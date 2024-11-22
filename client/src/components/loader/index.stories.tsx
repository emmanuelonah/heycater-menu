import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Loader } from './index.component';
import { SkeletonUI } from './skeleton-ui.component';

export default {
  title: 'Components/Loader',
  component: SkeletonUI,
} as Meta<typeof SkeletonUI>;

export const AccessibleLoader: StoryFn<typeof Loader> = () => <Loader isLoading />;

export const SkeletonLoader: StoryFn<typeof SkeletonUI> = () => <SkeletonUI />;

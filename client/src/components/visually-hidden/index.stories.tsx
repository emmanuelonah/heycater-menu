import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { VisuallyHidden } from './index.component';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
} as Meta<typeof VisuallyHidden>;

export const Primary: StoryFn<typeof VisuallyHidden> = () => (
  <VisuallyHidden>
    We can see this text in the DOM but not on the screen. Inspect the DOM to see it
  </VisuallyHidden>
);

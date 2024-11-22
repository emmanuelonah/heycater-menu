import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { AccessibleIcon } from './index.component';

const label = 'ITS TEST TUBE ICON';

export default {
  title: 'Components/AccessibleIcon',
  component: AccessibleIcon,
} as Meta<typeof AccessibleIcon>;

export const Primary: StoryFn<typeof AccessibleIcon> = () => (
  <AccessibleIcon label={label}>
    <span role="img" aria-label={label}>
      🧪
    </span>
  </AccessibleIcon>
);

import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PrimaryButton } from 'components/button/index.component';

export default {
  title: 'Components/Buttons',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

export const Primary: StoryFn<typeof PrimaryButton> = () => <PrimaryButton>Click me</PrimaryButton>;

import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PageWrapper } from './index.layout';

export default {
  title: 'User/Layouts/PageWrapper',
  component: PageWrapper,
} as Meta<typeof PageWrapper>;

export const Primary: StoryFn<typeof PageWrapper> = () => (
  <PageWrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quia sit dolore fuga eveniet
      porro ad rerum, odit, nisi et, quam quo accusantium nemo officia voluptatibus itaque! Ut,
      perspiciatis possimus!
    </p>
  </PageWrapper>
);

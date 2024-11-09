import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Modal } from './index.component';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export const Success: StoryFn<typeof Modal> = () => (
  <Modal type="success" open>
    Success submitted Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Modal>
);

export const Error: StoryFn<typeof Modal> = () => (
  <Modal type="error" open>
    Failed to submit Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Modal>
);

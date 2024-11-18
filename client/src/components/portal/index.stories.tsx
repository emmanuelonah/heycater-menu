import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Portal } from './index.component';

export default {
  title: 'Components/Portal',
  component: Portal,
} as Meta<typeof Portal>;

export const Primary: StoryFn<typeof Portal> = () => (
  <Portal>
    <div
      style={{
        position: 'fixed',
        top: '2px',
        left: '0px',
        right: '0px',
        margin: '0 auto',
      }}
    >
      PORTAL IN ACTION, NOW OUR ACCESSIBILITY DEVICE WILL EASILY READ OVERLAYING MODALS, PORTLETs,
      AND ETC...
    </div>
  </Portal>
);

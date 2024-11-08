import React from 'react';

import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme, GlobalStyles } from '../src/design-system';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <QueryClientProvider client={new QueryClient()}>
          <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
            <Story />
          </div>
        </QueryClientProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import React from 'react';

import { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme, GlobalStyles } from '../src/design-system';

const queryClient = new QueryClient();

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <QueryClientProvider client={queryClient}>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
              <Story />
            </div>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
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

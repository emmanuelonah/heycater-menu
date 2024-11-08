import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { App } from 'app';
import { startMockServer } from 'mocks';
import { reportWebVitals } from 'configs';
import { ErrorBoundary } from 'components';
import { SkipToMainContent, GlobalStyles, theme } from 'design-system';

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } });
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

startMockServer().finally(() => {
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <ErrorBoundary>
          <SkipToMainContent href="#main">Skip to main content</SkipToMainContent>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </React.StrictMode>
  );
});

reportWebVitals();

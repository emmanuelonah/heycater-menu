import React, { act } from 'react';

import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as TestingLibrary from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme, GlobalStyles } from 'design-system';

const queryClient = new QueryClient();

/**
 * @Wrapper provides to the children the Style-Theme QueryClient for react-query-lib
 */
function Wrapper(props: { children: React.ReactElement }) {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
}

/**
 * @renderWithOptions use this function when you want your test
 * component to access our design system
 * @param {children:React.ReactNode}
 * @returns a transpiled reactNode object
 */

function renderWithOptions(ui: React.ReactElement, opts?: TestingLibrary.RenderOptions) {
  return TestingLibrary.render(ui, {
    wrapper: Wrapper as React.JSXElementConstructor<{ children: React.ReactNode }>,
    ...opts,
  });
}

const { act: _act, ...rest } = TestingLibrary;

export const { render, fireEvent, screen, waitFor, renderHook, ...otherExports } = rest;

export { act, renderWithOptions };

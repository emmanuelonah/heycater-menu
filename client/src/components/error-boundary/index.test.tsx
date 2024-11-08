import React from 'react';

import { throwError } from 'utils';

import { ErrorBoundary } from './index.component';
import { renderWithOptions, screen, fireEvent, waitFor } from '../../utils';

jest.mock('../../utils/env/index.util.ts', () => ({
  __DEV__: true,
}));

function ThrowError() {
  throwError('ErrorBoundarySimulationError', 'Lets simulate our ErrorBoundary Abilities 🛠️');

  return <p>This can never be rendered, are you checking it in the DOM ☕️</p>;
}

describe('<ErrorBoundary/>', () => {
  const original = window.location;
  const reloadMock = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: reloadMock },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });

  it('should render child component when its error free', () => {
    renderWithOptions(
      <ErrorBoundary>
        <p>Foo Bar Baz</p>
      </ErrorBoundary>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });

  it('should render ErrorBoundary component when child component is not error free', async () => {
    renderWithOptions(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops, compilation error </>')).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(reloadMock).toHaveBeenCalledTimes(1);
  });
});

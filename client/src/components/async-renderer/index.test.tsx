import React from 'react';

import { renderWithOptions, screen } from 'utils';

import { AsyncRenderer } from './index.component';

describe('<AsyncRenderer/>', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

  it.skip('renders the loader when loading', () => {
    renderWithOptions(
      <AsyncRenderer isLoading hasData={false}>
        {() => null}
      </AsyncRenderer>
    );

    jest.advanceTimersByTime(3000);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the error message when there is an error', () => {
    const errorMessage = 'Something went wrong';

    renderWithOptions(
      <AsyncRenderer isLoading={false} hasData={false} error={errorMessage}>
        {() => null}
      </AsyncRenderer>
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders the no data message when there is no data', () => {
    renderWithOptions(
      <AsyncRenderer isLoading={false} hasData={false}>
        {() => null}
      </AsyncRenderer>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders the children when there is data', () => {
    const data = { message: 'Hello, world!' };

    renderWithOptions(
      <AsyncRenderer isLoading={false} data={data} hasData>
        {(data) => <div>{data?.message}</div>}
      </AsyncRenderer>
    );

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});

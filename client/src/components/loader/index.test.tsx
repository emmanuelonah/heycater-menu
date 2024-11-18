import React from 'react';

import { render, screen, act } from 'utils';

import { Loader } from './index.component';

jest.useFakeTimers();

describe('<Loader/>', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should show the loader after the specified time', () => {
    render(<Loader isLoading time={2000} loader="Loading..." />);

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should hide the loader and show "Finished loading" after loading is done', () => {
    const { rerender } = render(<Loader isLoading time={2000} loader="Loading..." />);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    rerender(<Loader isLoading={false} time={2000} loader="Loading..." />);

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Finished loading')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByText('Finished loading')).not.toBeInTheDocument();
  });
});

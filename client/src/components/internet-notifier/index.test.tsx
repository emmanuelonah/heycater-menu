import React from 'react';

import { screen, renderWithOptions, fireEvent, act } from '../../utils';

import { InternetNotifier } from './index.component';

function mockInternetConnection(status: string) {
  const event = new window.Event(status);

  act(() => {
    window.dispatchEvent(event);
  });
}

describe('<InternetNotifier/>', () => {
  it('should render offline component', () => {
    renderWithOptions(<InternetNotifier />);

    mockInternetConnection('offline');

    expect(screen.getByText('🛜 You are no longer connected to the internet.')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Gone offline')).not.toBeInTheDocument();
  });

  it('should render online component', () => {
    renderWithOptions(<InternetNotifier />);

    mockInternetConnection('online');

    expect(screen.getByText('🛜 You are now connected to the internet.')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Back online')).not.toBeInTheDocument();
  });
});

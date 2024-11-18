import React from 'react';

import { renderWithOptions, screen } from 'utils';

import { ROUTES } from 'routes/util';
import { NotFound } from './index.component';

jest.mock('components', () => ({
  Heading3: ({ children }: { children: React.ReactNode }) => <h3>{children}</h3>,
}));

describe('<NotFound/>', () => {
  it('should render the heading and paragraph text', () => {
    renderWithOptions(<NotFound />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      "Sorry, this page isn't available."
    );
    expect(
      screen.getByText('The link you followed may be broken, or the page may have been removed.')
    ).toBeInTheDocument();
  });

  it('should render the link with correct href', () => {
    renderWithOptions(<NotFound />);

    const link = screen.getByRole('link', { name: 'Go back to HeyCarter' });
    expect(link).toHaveAttribute('href', ROUTES.client.home);
  });
});

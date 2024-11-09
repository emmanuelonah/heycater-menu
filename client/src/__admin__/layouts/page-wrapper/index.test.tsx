import { ROUTES } from 'routes/util';

import { PageWrapper } from './index.layout';
import { renderWithOptions, screen } from '../../../utils/test/index.util';

describe('<PageWrapper/>', () => {
  it('should render component', () => {
    renderWithOptions(<PageWrapper>Foo Bar Baz</PageWrapper>);

    const [headerLink, footerLink] = screen.getAllByRole('link');

    expect(headerLink).toHaveAttribute('href', ROUTES.client.home);
    expect(footerLink).toHaveAttribute('href', ROUTES.client.home);
  });
});

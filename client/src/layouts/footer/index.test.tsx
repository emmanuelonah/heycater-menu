import { render, screen } from 'utils';

import { Footer } from './index.layout';

describe('<Footer/>', () => {
  it('should render component', () => {
    render(
      <Footer>
        <p>Foo Bar Baz</p>
      </Footer>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });
});

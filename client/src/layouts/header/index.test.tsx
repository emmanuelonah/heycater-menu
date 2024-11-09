import { render, screen } from 'utils';

import { Header } from './index.layout';

describe('<Header/>', () => {
  it('should render component', () => {
    render(
      <Header>
        <p>Foo Bar Baz</p>
      </Header>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });
});

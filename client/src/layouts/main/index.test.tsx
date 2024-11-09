import { render, screen } from 'utils';

import { Main } from './index.layout';

describe('<Main/>', () => {
  it('should render component', () => {
    render(
      <Main>
        <p>Foo Bar Baz</p>
      </Main>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });
});

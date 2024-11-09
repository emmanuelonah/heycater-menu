import { renderWithOptions, screen } from 'utils';

import { ErrorText } from './index.component';

describe('<ErrorText/>', () => {
  it('should render the error text', () => {
    renderWithOptions(<ErrorText>error text</ErrorText>);

    expect(screen.getByText('error text')).toBeInTheDocument();
  });
});

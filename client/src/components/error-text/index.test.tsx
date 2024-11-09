import { renderWithOptions, screen } from 'utils';

import { ErrorText, ListError } from './index.component';

describe('<ErrorText/>', () => {
  it('should render the error text', () => {
    renderWithOptions(<ErrorText>error text</ErrorText>);

    expect(screen.getByText('error text')).toBeInTheDocument();
  });

  it('should render the list of errors', () => {
    renderWithOptions(<ListError errors={['error 1', 'error 2']} />);

    expect(screen.getByText('error 1')).toBeInTheDocument();
    expect(screen.getByText('error 2')).toBeInTheDocument();
  });
});

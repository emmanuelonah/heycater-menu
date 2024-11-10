import { renderWithOptions, screen } from 'utils';

import { PrimaryButton } from './index.component';

describe('<Button/>', () => {
  it('should render primary button', () => {
    renderWithOptions(<PrimaryButton>Click me</PrimaryButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});

import React from 'react';

import { render, screen } from 'utils';

import { VisuallyHidden } from './index.component';

describe('<VisuallyHidden/>', () => {
  const textNode = 'Food Bar Baz';

  it('should confirm that "HELLO WORLD" is not visible to the user but present in the DOM', () => {
    render(<VisuallyHidden>{textNode}</VisuallyHidden>);

    expect(screen.queryByText(textNode)).toBeInTheDocument();
    expect(screen.getByTestId('visuallyHidden')).toHaveStyle({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    });
  });
});

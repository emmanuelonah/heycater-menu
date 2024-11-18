import React from 'react';

import { render, screen } from 'utils';

import { SkeletonUI } from './skeleton-ui.component';

describe('SkeletonUI', () => {
  it('should render 8 skeleton elements', () => {
    render(<SkeletonUI />);

    const skeletonElements = screen.getAllByText('spaghetti 🍝...');

    expect(skeletonElements).toHaveLength(8);
  });

  it('should have the correct styles applied', () => {
    render(<SkeletonUI />);

    const [skeletonElement] = screen.getAllByText('spaghetti 🍝...');

    expect(skeletonElement).toHaveStyle({
      borderRadius: '0.5rem',
      height: '100px',
      width: '200px',
      fontStyle: 'italic',
      fontSize: '0.6rem',
      opacity: '0.7',
      marginBottom: '0.25rem',
      padding: '0.5rem',
    });
  });
});

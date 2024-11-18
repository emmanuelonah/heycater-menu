import React from 'react';
import { render, screen, waitFor } from 'utils';

import { Portal } from './index.component';

describe('<Portal/>', () => {
  beforeEach(() => {
    // Clean up any leftover portals
    document.body.innerHTML = '';
  });

  it('renders children in a portal', async () => {
    render(
      <Portal>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    );

    // Wait for the portal to be created
    await waitFor(() => {
      expect(screen.getByTestId('portal-content')).toBeInTheDocument();
    });

    // Check if the content is in the body, not in the original render location
    expect(document.body.contains(screen.getByTestId('portal-content'))).toBe(true);
  });

  it('uses custom element type', async () => {
    render(
      <Portal elementType="custom-portal">
        <div>Custom Portal</div>
      </Portal>
    );

    await waitFor(() => {
      const customPortal = document.querySelector('custom-portal');
      expect(customPortal).toBeInTheDocument();
      expect(customPortal?.textContent).toBe('Custom Portal');
    });
  });

  it('uses custom container', async () => {
    const customContainer = document.createElement('div');
    customContainer.id = 'custom-container';
    document.body.appendChild(customContainer);

    const containerRef = React.createRef<HTMLDivElement>();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    containerRef.current = customContainer;

    render(
      <Portal container={containerRef}>
        <div>Container Portal</div>
      </Portal>
    );

    await waitFor(() => {
      expect(customContainer.textContent).toBe('Container Portal');
    });
  });

  it('removes portal on unmount', async () => {
    const { unmount } = render(
      <Portal>
        <div data-testid="portal-content">Unmount Test</div>
      </Portal>
    );

    await waitFor(() => {
      expect(screen.getByTestId('portal-content')).toBeInTheDocument();
    });

    unmount();

    await waitFor(() => {
      expect(screen.queryByTestId('portal-content')).not.toBeInTheDocument();
    });
  });
});
import React from 'react';

import { renderWithOptions, screen, fireEvent } from 'utils';

import { Modal } from './index.component';
import { useModal } from './useModal';

jest.mock('./useModal', () => ({
  useModal: jest.fn(),
}));

jest.mock('components', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('<Modal/>', () => {
  beforeEach(() => {
    (useModal as jest.Mock).mockImplementation((open, controlledState) => {
      const isOpen = controlledState ? controlledState.isOpen : open;
      const closeModal = controlledState ? controlledState.onClose : jest.fn();
      return { isOpen, closeModal };
    });
  });

  it('should render the modal when open is true', () => {
    renderWithOptions(
      <Modal open type="success">
        Modal Content
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render the modal when open is false', () => {
    renderWithOptions(
      <Modal open={false} type="success">
        Modal Content
      </Modal>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', () => {
    const closeModal = jest.fn();
    (useModal as jest.Mock).mockReturnValue({ isOpen: true, closeModal });

    renderWithOptions(
      <Modal open type="success">
        Modal Content
      </Modal>
    );

    fireEvent.click(screen.getByLabelText('Close'));
    expect(closeModal).toHaveBeenCalled();
  });

  it('should call onClose when closeModal is called in controlled mode', () => {
    const onClose = jest.fn();
    renderWithOptions(
      <Modal open={false} type="success" controlledState={{ isOpen: true, onClose }}>
        Modal Content
      </Modal>
    );

    fireEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
});

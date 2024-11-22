import React from 'react';

import { Portal } from 'components';

import { useModal } from './useModal';
import { Wrapper, Text, Close, Body } from './index.styles';

type PrimitiveDivPropTypes = React.ComponentPropsWithoutRef<'div'>;
type ModalElement = React.ElementRef<'div'>;

interface ModalPropTypes extends PrimitiveDivPropTypes {
  open: boolean;
  type: 'success' | 'error';
  controlledState?: {
    isOpen: boolean;
    onClose(): void;
  };
}

export const Modal = React.forwardRef<ModalElement, ModalPropTypes>(function Modal(
  { type, children, open, controlledState, ...restProps },
  forwardedRef
) {
  const { isOpen, closeModal } = useModal(open, controlledState);

  if (!isOpen) return null;

  return (
    <Portal elementType="modal">
      <Wrapper
        role="dialog"
        aria-modal="true"
        aria-atomic
        {...restProps}
        className={type}
        ref={forwardedRef}
      >
        <Body>
          <Text>{children}</Text>
          <Close aria-label="Close" onClick={closeModal}>
            X
          </Close>
        </Body>
      </Wrapper>
    </Portal>
  );
});

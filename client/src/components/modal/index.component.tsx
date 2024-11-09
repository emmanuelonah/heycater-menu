import React from 'react';

import { Portal } from 'components';

import { useModal } from './useModal';
import { Wrapper, Text, Close, Body } from './index.styles';

type PrimitiveDivPropTypes = React.ComponentPropsWithoutRef<'div'>;
type ModalElement = React.ElementRef<'div'>;

interface ModalPropTypes extends PrimitiveDivPropTypes {
  open: boolean;
  type: 'success' | 'error';
}

export const Modal = React.forwardRef<ModalElement, ModalPropTypes>(function Modal(
  { type, children, open, ...restProps },
  forwardedRef
) {
  const { isOpen, setToFalse } = useModal(open);

  if (!isOpen) return null;

  return (
    <Portal elementType="modal">
      <Wrapper {...restProps} className={type} ref={forwardedRef}>
        <Body>
          <Text>{children}</Text>
          <Close aria-label="Close" onClick={setToFalse}>
            X
          </Close>
        </Body>
      </Wrapper>
    </Portal>
  );
});

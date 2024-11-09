import React from 'react';

import { Modal } from 'components';

import { useInternetNotifier } from './useInternetNotifier.presenter';

export function InternetNotifier() {
  const { open, message, onHideNotifier, isBackOnline } = useInternetNotifier();

  return (
    <Modal
      open={open}
      type={isBackOnline ? 'success' : 'error'}
      controlledState={{ isOpen: open, onClose: onHideNotifier }}
    >
      {message}
    </Modal>
  );
}

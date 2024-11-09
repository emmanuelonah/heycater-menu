import { useEffect } from 'react';

import { useBoolean } from 'hooks';

export function useModal(open: boolean) {
  const [isOpen, { setToFalse }] = useBoolean(open);

  useEffect(() => {
    let timeout: NodeJS.Timeout = null!;

    if (isOpen) {
      timeout = setTimeout(setToFalse, 3000);
    }

    return () => clearTimeout(timeout);
  }, []);

  return { isOpen, setToFalse };
}

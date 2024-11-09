import React, { useState, useEffect } from 'react';

type LoaderPropTypes = {
  isLoading: boolean;
  time?: number;
  loader?: React.ReactNode;
};

export function Loader({ isLoading, time = 2000, loader = 'Loading...' }: LoaderPropTypes) {
  const [showLoader, setShowLoader] = useState(false);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> = null!;

    timeout = setTimeout(() => {
      if (isLoading) setShowLoader(true);
    }, time);

    return () => clearTimeout(timeout);
  }, [isLoading, time]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> = null!;

    if (!isLoading && showLoader) {
      setShowLoader(false);
      setIsDoneLoading(true);
    }

    if (isDoneLoading) {
      timeout = setTimeout(() => setIsDoneLoading(false), 2000);
    }

    return () => clearTimeout(timeout);
  }, [isDoneLoading, isLoading, showLoader]);

  return (
    <>
      {isDoneLoading && <p>Finished loading</p>}

      {showLoader && loader}
    </>
  );
}

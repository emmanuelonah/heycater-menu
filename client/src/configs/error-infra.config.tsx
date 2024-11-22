import React from 'react';

import { Provider, ErrorBoundary } from '@rollbar/react';

import { host } from 'utils';

const rollbarConfig = () => ({
  accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
  environment: host(),
  checkIgnore: () => false,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        source_map_enabled: true,
        guess_uncaught_frames: true,
      },
    },
  },
});

type ErrorTrackerInfraPropTypes = {
  children: React.ReactNode;
};

export function ErrorTrackerInfra(props: ErrorTrackerInfraPropTypes) {
  return (
    <Provider config={rollbarConfig()}>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </Provider>
  );
}

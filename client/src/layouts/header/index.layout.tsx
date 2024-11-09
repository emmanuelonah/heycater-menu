import React from 'react';

type PrimitiveHeaderPropTypes = React.ComponentPropsWithoutRef<'header'>;
type HeaderElement = React.ElementRef<'header'>;

export const Header = React.forwardRef<HeaderElement, PrimitiveHeaderPropTypes>(
  function Header(props, forwardedRef) {
    return <header {...props} ref={forwardedRef} />;
  }
);

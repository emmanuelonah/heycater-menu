import React from 'react';

type PrimitiveFooterPropTypes = React.ComponentPropsWithoutRef<'footer'>;
type FooterElement = React.ElementRef<'footer'>;

export const Footer = React.forwardRef<FooterElement, PrimitiveFooterPropTypes>(
  function Footer(props, forwardedRef) {
    return <footer {...props} ref={forwardedRef} />;
  }
);

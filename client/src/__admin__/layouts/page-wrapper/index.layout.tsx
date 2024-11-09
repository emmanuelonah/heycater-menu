import React from 'react';

import { NavLink } from 'react-router-dom';

import { ROUTES } from 'routes/util';
import { AccessibleIcon } from 'components';
import { designTokens } from 'design-system';

import { Header, Main, Footer } from './index.styles';

type PageWrapperPropTypes = React.ComponentPropsWithoutRef<'main'>;
type PageWrapperElement = React.ElementRef<'main'>;

export const PageWrapper = React.forwardRef<PageWrapperElement, PageWrapperPropTypes>(
  function PageWrapper(props, forwardedRef) {
    return (
      <>
        <Header>
          <NavLink to={ROUTES.client.home}>
            <AccessibleIcon label="Logo to user home page">
              <designTokens.assets.IconLogo />
            </AccessibleIcon>
          </NavLink>
        </Header>
        <Main ref={forwardedRef}>{props.children}</Main>
        <Footer>
          <NavLink to={ROUTES.client.home}>
            <AccessibleIcon label="Logo to user home page">
              <designTokens.assets.IconLogo />
            </AccessibleIcon>
          </NavLink>
        </Footer>
      </>
    );
  }
);

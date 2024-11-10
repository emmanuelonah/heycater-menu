import React from 'react';

import { NavLink } from 'react-router-dom';

import icnFood from 'design-system/assets/icn-get-it-done-bowl.png';

import { ROUTES } from 'routes/util';
import { AccessibleIcon } from 'components';
import { designTokens } from 'design-system';

import { Header, Main, Footer, Resizer, H1, FoodImage, Row } from './index.styles';

type PageWrapperPropTypes = React.ComponentPropsWithoutRef<'main'>;
type PageWrapperElement = React.ElementRef<'main'>;

export const PageWrapper = React.forwardRef<PageWrapperElement, PageWrapperPropTypes>(
  function PageWrapper(props, forwardedRef) {
    return (
      <>
        <Header>
          <Resizer>
            <NavLink to={ROUTES.client.home}>
              <AccessibleIcon label="Logo to user home page">
                <designTokens.assets.IconLogo />
              </AccessibleIcon>
            </NavLink>
            <Row>
              <H1>Order your next delicious meal with us.</H1>
              <FoodImage src={icnFood} alt="A bowl of food" />
            </Row>
          </Resizer>
        </Header>
        <Main ref={forwardedRef}>
          <Resizer>{props.children}</Resizer>
        </Main>
        <Footer>
          <Resizer>
            <NavLink to={ROUTES.client.home}>
              <AccessibleIcon label="Logo to user home page">
                <designTokens.assets.IconLogo />
              </AccessibleIcon>
            </NavLink>
          </Resizer>
        </Footer>
      </>
    );
  }
);

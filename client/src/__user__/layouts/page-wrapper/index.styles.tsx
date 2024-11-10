import styled from 'styled-components';

import * as Layouts from 'layouts';
import { Heading1 } from 'components';

const Header = styled(Layouts.Header)`
  /**
   * @mobileStyle
   */
  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.colors.secondary100};

  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    padding: 2rem 6rem;
    height: 200px;
  }
`;

const Main = styled(Layouts.Main)`
  /**
   * @mobileStyle
   */
  padding: 1rem 2rem;

  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    padding: 1rem 6rem;
  }
`;

const Footer = styled(Layouts.Footer)`
  background-color: ${({ theme }) => theme.colors.secondary100};
  padding: 1rem 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  z-index: ${({ theme }) => theme.typography.zIndexes.max};
`;

const Resizer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const H1 = styled(Heading1)`
  /**
   * @mobileStyle
   */
  font-weight: ${(props) => props.theme.typography?.title2.fontWeight};
  font-size: ${(props) => props.theme.typography?.bodyText.fontSize};

  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    font-weight: ${(props) => props.theme.typography?.title2.fontWeight};
    font-size: ${(props) => props.theme.typography?.title2.fontSize};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FoodImage = styled.img`
  width: 100px;
`;

export { Header, Main, Footer, Resizer, H1, FoodImage, Row };

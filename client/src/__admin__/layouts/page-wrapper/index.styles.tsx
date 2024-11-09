import styled from 'styled-components';

import * as Layouts from 'layouts';

const Header = styled(Layouts.Header)`
  background-color: ${({ theme }) => theme.colors.secondary100};
  padding: 1rem 2rem;
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

export { Header, Main, Footer };

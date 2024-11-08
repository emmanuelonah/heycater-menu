import styled from 'styled-components';

const Wrapper = styled.div`
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

  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > img {
    width: 300px;
  }
`;

const Refresh = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & span {
    padding-left: 0.5rem;
  }

  & img {
    width: 25px;
  }
`;

export { Wrapper, Refresh };

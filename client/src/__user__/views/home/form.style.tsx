import styled from 'styled-components';

const Wrapper = styled.form`
  /**
   * @mobileStyle
   */
  display: flex;
  flex-direction: column-reverse;

  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    display: flex;
    flex-direction: row;
    justify-content: none;
    gap: 20px;
    align-items: center;
  }
`;

/**
 * SearchWidget Styles
 */
const SearchWidgetContainer = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.warning100};
  border-radius: 5px;
  box-shadow: rgba(196, 112, 3, 0.243) 0px 3px 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;

  /**
  * @mobileStyle
  */
  margin-bottom: 1rem;

  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    margin-bottom: 0;
  }
`;

const SearchField = styled.input`
  padding: 0.9rem 0.5rem;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

/**
 * Sort Widget Styles
 */
const Select = styled.select`
  padding: 0.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 250px;
`;

const Option = styled.option``;

export { Wrapper, SearchField, SearchWidgetContainer, Select, Option };

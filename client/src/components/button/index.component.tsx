import styled from 'styled-components';

const PrimaryButton = styled.button`
  padding: 1rem 0.5rem;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.warning100};
  color: ${({ theme }) => theme.colors.white400};
  font-size: 1rem;
  border: none;
  border-radius: 2px;

  &:hover {
    opacity: 0.7;
  }
`;

export { PrimaryButton };

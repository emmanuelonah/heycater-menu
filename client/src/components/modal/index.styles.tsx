import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 100%;
  max-width: 400px;
  color: ${({ theme }) => theme.colors.white300};
  padding: 0.8rem 1rem;

  &.success {
    background-color: ${({ theme }) => theme.colors.success300};
  }

  &.error {
    background-color: ${({ theme }) => theme.colors.error300};
  }
`;

const Text = styled.p`
  padding: 0.5rem 0;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Close = styled.button`
  color: ${({ theme }) => theme.colors.white300};
  border: none;
  height: fit-content;
  font-size: 1rem;
  background-color: transparent;
`;

export { Wrapper, Text, Close, Body };

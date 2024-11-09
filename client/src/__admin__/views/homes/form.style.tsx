import styled from 'styled-components';

const Wrapper = styled.form`
  * {
    display: block;
    margin: 0.5rem auto;
    width: 100%;
    max-width: 500px;
  }
`;

const TextField = styled.input`
  padding: 0.8rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
`;

const Select = styled.select`
  padding: 0.8rem;
`;

const Option = styled.option``;

const Submit = styled.button`
  background-color: ${({ theme }) => theme.colors.warning100};
  color: ${({ theme }) => theme.colors.white400};
  width: 150px;
  border: none;
  padding: 0.8rem;
  margin-top: 2rem;

  &:hover {
    opacity: 0.7;
  }
`;

export { Wrapper, TextField, TextArea, Select, Option, Submit };

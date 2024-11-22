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

export { Wrapper, TextField, TextArea, Select, Option };

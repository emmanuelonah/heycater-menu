import styled, { css } from 'styled-components';

const sharedStyles = css`
  font-weight: ${(props) => props.theme.typography.smallText.fontWeight};
  font-size: ${(props) => props.theme.typography.smallText.fontSize};
`;

const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.error400};
  ${sharedStyles}
`;

const List = styled.ul``;

const Item = styled.li`
  ${sharedStyles}
  color: ${(props) => props.theme.colors.white400};
`;

type ListErrorPropTypes = {
  errors: string[];
};

function ListError(props: ListErrorPropTypes) {
  return (
    <List>
      {props.errors.map((error, index) => (
        <Item key={index.toString()}>{error}</Item>
      ))}
    </List>
  );
}

export { ListError, ErrorText };

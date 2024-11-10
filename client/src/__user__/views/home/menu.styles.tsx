import styled from 'styled-components';

import { Heading2 } from 'components';

const Card = styled.div`
  display: flex;
  gap: 20px;
  font-size: 12px;
  height: 200px;
  word-wrap: break-word;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.dark100};
`;

const Image = styled.img`
  display: block;
  width: 120px;
  height: 100px;
  border-radius: 5px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & button {
    cursor: not-allowed;
    padding: 10px;
    width: 100px;
  }
`;

const Name = styled(Heading2)`
  font-weight: ${(props) => props.theme.typography?.title2.fontWeight};
  font-size: ${(props) => props.theme.typography?.bodyText.fontSize};
`;

const Description = styled.p``;

const PriceWrapper = styled.p`
  font-weight: ${(props) => props.theme.typography?.title2.fontWeight};
`;

const Currency = styled.span`
  display: inline-block;
  padding-right: 2px;
`;

const Price = styled.span``;

export { Card, Image, DetailsWrapper, Name, Description, PriceWrapper, Currency, Price };

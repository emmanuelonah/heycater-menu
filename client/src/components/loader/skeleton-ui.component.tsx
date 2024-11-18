import styled, { keyframes } from 'styled-components';

const dim = keyframes`
  0% {
    color: inherit;
    background-color: inherit;
  }

  100% {
    color: hsl(200, 20%, 95%);
    background-color: hsl(210, 6%, 87%);
  }
`;

const Skeleton = styled.div`
  border-radius: 0.5rem;
  height: 100px;
  width: 200px;
  font-style: italic;
  font-size: 0.6rem;
  opacity: 0.7;
  animation: ${dim} 1s linear infinite alternate;
  margin-bottom: 0.25rem;
  padding: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export function SkeletonUI() {
  const iterator = [...new Array(8)];

  return (
    <Container>
      {iterator.map((_, index) => (
        <Skeleton key={index.toString()}>spaghetti 🍝...</Skeleton>
      ))}
    </Container>
  );
}

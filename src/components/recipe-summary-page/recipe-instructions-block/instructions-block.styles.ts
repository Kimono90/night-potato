import styled from '@emotion/styled';

export const StyledInstruction = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: start;
  margin: 0.5rem;
  flex-wrap: nowrap;
  cursor: pointer;
  text-decoration: none;

  svg {
    cursor: pointer;
    margin-left: 1rem;
    margin-top: 0.35rem;
  }

  p {
    text-align: start;
    margin: 0 1rem;
  }
`;

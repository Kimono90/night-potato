import styled from '@emotion/styled';

export const StyledLabelBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-top: #7d6c6a 3px solid;
  padding: 0.5rem;
  box-sizing: border-box;

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: unset;
    padding: 1rem 2rem;
  }
`;

export const StyledLabelList = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (min-width: 500px) {
    width: 50%;
  }
`;

export const StyledDetailsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 1rem 2rem;
  flex-wrap: wrap;
`;
export const StyledDetailsItem = styled.span`
  margin: 0;
`;

export const StyledDetailsItemLabel = styled.span`
  width: 5rem;
  display: inline-block;
  text-align: start;
  padding: 0;
  margin: 0;

  @media (min-width: 500px) {
    width: 10rem;
  }
`;

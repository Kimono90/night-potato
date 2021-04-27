import styled from '@emotion/styled';

export const StyledSummaryCard = styled.div`
  border-radius: 0.5rem;
  margin: 0 1rem 2rem 1rem;
  background-color: #7d6c6a;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  font-size: 1.25rem;

  @media (min-width: 500px) {
    width: 45rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const StyledTitle = styled.div`
  max-width: 95%;
  align-self: center;
  font-size: 1.5rem;
  padding: 0.5rem;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`;

export const StyledList = styled.div`
  border-radius: 0.5rem;
  background-color: #c9a495;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const StyledRemoveButton = styled.button`
  font: inherit;
  font-size: 1rem;
  color: white;
  border: none;
  background-color: orangered;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  cursor: pointer;
`;

export const StyledAddButton = styled.button`
  font: inherit;
  font-size: 1rem;
  color: white;
  border: none;
  background-color: limegreen;
  border-radius: 0.5rem;
  text-align: center;
  align-self: center;
  padding: 0.25rem 0.5rem;
  min-width: 4rem;
  margin: 1rem 0;
  cursor: pointer;
`;

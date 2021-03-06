import styled from '@emotion/styled';

export const StyledSummaryCard = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: #7D6C6A;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 1.25rem;
  
  @media (min-width: 500px) {
    width: 45rem;
  }
  `

export const StyledTitle = styled.div`
  max-width: 90%;
  align-self: center;
  font-size: 2rem;
  padding: 0.5rem;
  `

export const StyledList = styled.div`
  border-radius: 0.5rem;
  background-color: #C9A495;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  `
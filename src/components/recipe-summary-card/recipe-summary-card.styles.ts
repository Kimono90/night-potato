import styled from '@emotion/styled'

export const StyledRecipeSummaryCard = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: #7D6C6A;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%; 
  
  :hover {
    box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.2);
    transition: box-shadow .2s ease-in-out;
    cursor: pointer;
  }
  
  @media(min-width: 541px) {
    width: 35rem;
  }
  `

export const StyledRecipeSummaryTitle = styled.div`
  max-width: 90%;
  align-self: center;
  font-size: 1.5rem;
  padding: 0.5rem
  `

export const StyledRecipeSummaryInfo = styled.div`
  border-radius: 0.5rem;
  background-color: #C9A495;
  display: flex;
  text-align: start;
  justify-content: space-between;
  align-items: center;
  
  @media(min-width: 541px) {
    height: 10rem;
  }
  `

export const StyledRecipeSummaryDescription = styled.div`
  flex-direction: column;

  & div {
    margin: 0.5rem 1.5rem;

    & svg {
      min-width: 2rem;
    }
  }
  
  @media(min-width: 541px) {
    max-height: 10rem;
    font-size: 1.5rem;
  }
  `

export const StyledRecipeSummaryPhoto = styled.div`
  max-height: 100%;
  max-width: 50%;
  width: 5rem;
  height: 7rem;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
  border-radius: 0 0.5rem 0.5rem 0;
  
  @media(min-width: 541px) {
    width: 30rem;
    height: 50rem;
  }
  `
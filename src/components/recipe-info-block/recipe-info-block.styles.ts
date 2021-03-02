import styled from '@emotion/styled'

export const StyledRecipeInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export const StyledFullRecipeCard = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: #7D6C6A;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  
  @media (min-width: 541px) {
    width: 35rem;
  }
  `

export const StyledRecipeTitle = styled.div`
  max-width: 90%;
  align-self: center;
  font-size: 2rem;
  padding: 0.5rem;
  `

export const StyledRecipeMetaInfo = styled.div`
  border-radius: 0.5rem;
  background-color: #C9A495;
  display: flex;
  text-align: start;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & div {
    margin: 0.5rem 1.5rem;

    & svg {
      min-width: 2rem;
    }
  }
  
  @media (min-width: 541px) {
    height: 3rem;
    font-size: 1.5rem;
  }
  `
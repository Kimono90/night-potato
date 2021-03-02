import styled from '@emotion/styled';

export const StyledIngredientList = styled.div`
  border-radius: 0.5rem;
  background-color: #C9A495;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 541px) {
    font-size: 1.5rem;
  }
  `

export const StyledIngredient = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;

  svg {
    margin: 1rem 0 1rem 1rem;
    cursor: pointer;
  }
  
  p,s {
    text-align: start;
    margin: 0.5rem 1rem;
  }
  
  #amount {
    width: 6rem;
  }
`
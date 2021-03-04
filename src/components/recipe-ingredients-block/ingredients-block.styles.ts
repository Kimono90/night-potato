import styled from '@emotion/styled';

export const StyledIngredientList = styled.div`
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

export const StyledIngredient = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
  flex-wrap: nowrap;


  svg {
    cursor: pointer;
    margin-left: 1rem;
  }
  
  p {
    text-align: start;
    margin: 0 1rem;
  }
  
  #amount {
    display: inline-block;
    
    @media(min-width: 500px) {
      width: 8rem;
    }
  }
`
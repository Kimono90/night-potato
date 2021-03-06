import styled from '@emotion/styled';

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
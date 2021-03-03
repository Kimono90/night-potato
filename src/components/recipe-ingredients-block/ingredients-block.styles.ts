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
  align-items: center;
  margin: 0.5rem;

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
    width: 8rem;
  }
`

export const StyledIngredientStrikeThrough = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  border-bottom: 2px solid white;
  transform: translate(-50%, -50%) scaleX(${(props: {isChecked: boolean}) => props.isChecked ? 1 : 0});
  transform-origin: left;
  transition: transform .3s ease-in-out;
`
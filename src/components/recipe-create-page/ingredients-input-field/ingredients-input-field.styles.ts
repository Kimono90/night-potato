import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCreateIngredientItem = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const StyledIngredientField = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  width: 18rem;
  margin: 0.5rem;

  @media (min-width: 500px) {
    margin: unset;
  }
`;

export const StyledAmountField = styled.input`
  font: inherit;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  width: 4.5rem;
  text-align: center;
  overflow: hidden;
  -moz-appearance: textfield;
  margin: 0.5rem;

  @media (min-width: 500px) {
    margin: unset;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSelectField = styled.select`
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  font-family: inherit;
  font-size: 1.5rem;
  color: grey;
  min-width: 7rem;
  margin: 0.5rem 0 0 0.5rem;

  :after {
    border-radius: 0.5rem;
  }

  @media (min-width: 500px) {
    margin: unset;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const StyledMobileIngredient = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: 0.25rem;
  flex-wrap: nowrap;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;

  p {
    text-align: start;
    margin: 0 0.5rem;
    text-decoration: none;
  }

  #amount {
    display: inline-block;
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

import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCreateIngredientItem = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
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

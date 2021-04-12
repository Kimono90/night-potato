import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledRecipeInput = styled.input`
  margin-top: 2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: solid black 1px;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5rem;
  color: white;
  outline: none;
  background-color: #c9a495;
`;

export const StyledRecipeName = styled.div`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: solid black 1px;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5rem;
  color: white;
  outline: none;
  background-color: #7d6c6a;
  cursor: pointer;
  text-align: start;
  width: 100%;
`;

export const StyledPenIcon = styled(FontAwesomeIcon)`
  align-self: flex-end;
  z-index: 2;
  margin-left: -2rem;
  margin-bottom: 1.2rem;
`;

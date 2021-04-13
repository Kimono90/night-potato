import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type RecipeInputProps = {
  hasError: string;
};

export const StyledRecipeNameInput = styled.input<RecipeInputProps>`
  margin-top: 2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: ${(props) => (props.hasError == 'true' ? 'solid red 2px' : 'solid black 1px')};
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
  min-height: 2rem;
`;

export const StyledPenIcon = styled(FontAwesomeIcon)`
  margin-top: 2.95rem;
  margin-right: 1rem;
  right: 0;
  position: absolute;
  cursor: pointer;
`;

export const StyledInputErrorMessage = styled.span`
  margin-top: 0.25rem;
  margin-left: 0.5rem;
`;

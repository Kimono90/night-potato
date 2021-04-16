import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type RecipeInputProps = {
  hasError: string;
};

export const StyledRecipeNameInput = styled.input<RecipeInputProps>`
  margin-top: 2rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: ${(props) => (props.hasError == 'true' ? 'solid red 2px' : 'solid black 1px')};
  font-family: inherit;
  font-size: 1.5rem;
  outline: none;
  background-color: white;

  @media (min-width: 500px) {
    padding: 0.5rem 2.5rem 0.5rem 1rem;
  }
`;

export const StyledRecipeName = styled.div`
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: solid black 1px;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5rem;
  color: white;
  outline: none;
  background-color: #7d6c6a;
  cursor: pointer;
  width: 100%;
  min-height: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 500px) {
    padding: 0.5rem 2.5rem 0.5rem 1rem;
  }
`;

export const StyledPenIcon = styled(FontAwesomeIcon)`
  margin-top: 2.95rem;
  right: 0;
  position: absolute;
  cursor: pointer;

  @media (min-width: 500px) {
    margin-right: -1.25rem;
  }
`;

export const StyledLetterCounter = styled.span`
  margin-top: 0.25rem;
  right: 0;
  position: absolute;
  user-select: none;

  @media (min-width: 500px) {
    margin-right: -1.75rem;
  }
`;

export const StyledInputErrorMessage = styled.span`
  margin-top: 0.25rem;
  margin-left: -0.25rem;
  max-width: 100%;
  text-align: start;
  user-select: none;
  align-self: flex-start;

  @media (min-width: 500px) {
    margin-left: -1.5rem;
  }
`;

export const StyledRecipeNameFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  flex-direction: column;
  position: relative;
  margin-bottom: 2rem;

  @media (min-width: 500px) {
    width: 30%;
    align-items: center;
  }
`;

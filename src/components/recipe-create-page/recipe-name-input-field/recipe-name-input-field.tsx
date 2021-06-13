import React, { ChangeEvent, ReactElement, useState } from 'react';
import {
  StyledInputErrorMessage,
  StyledPenIcon,
  StyledRecipeNameInput,
  StyledRecipeName,
  StyledLetterCounter,
  StyledRecipeNameFieldWrapper,
} from './recipe-name-field.styles';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type Props = {
  recipeName: string;
  recipeNameHasError: boolean;
  onRecipeNameChange: (name: string) => void;
};

export function RecipeNameInputField({ recipeName, recipeNameHasError, onRecipeNameChange }: Props): ReactElement {
  const [showRecipeName, setShowRecipeName] = useState<boolean>(false);
  const [letterCount, setLetterCount] = useState<number>(0);

  const recipeNameLetterCount = `${letterCount}/50`;

  const recipeNameElement = showRecipeName ? (
    <StyledRecipeNameFieldWrapper>
      <StyledRecipeName onClick={() => setShowRecipeName(false)}>{recipeName}</StyledRecipeName>
      <StyledPenIcon icon={faPen} onClick={() => setShowRecipeName(false)} />
    </StyledRecipeNameFieldWrapper>
  ) : (
    <StyledRecipeNameFieldWrapper>
      <StyledRecipeNameInput
        maxLength={50}
        autoFocus
        placeholder="Name your recipe"
        value={recipeName}
        onChange={(input: ChangeEvent<HTMLInputElement>) => {
          setLetterCount(input.target.value.length);
          onRecipeNameChange(input.target.value);
        }}
        hasError={`${recipeNameHasError}`}
      />
      <StyledLetterCounter>{recipeNameLetterCount}</StyledLetterCounter>
      {recipeNameHasError ? (
        <StyledInputErrorMessage>
          You don't forget to name your children, right? Your recipe deserves a good name too.
        </StyledInputErrorMessage>
      ) : null}
    </StyledRecipeNameFieldWrapper>
  );
  return <>{recipeNameElement}</>;
}

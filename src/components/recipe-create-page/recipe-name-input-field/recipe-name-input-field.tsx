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
  onRecipeNameHasError: (hasError: boolean) => void;
};

export function RecipeNameInputField({ onRecipeNameHasError }: Props): ReactElement {
  const [showRecipeName, setShowRecipeName] = useState<boolean>(false);
  const [showRecipeInputError, setShowRecipeInputError] = useState<boolean>(false);
  const [letterCount, setLetterCount] = useState<number>(0);
  const [recipeName, setRecipeName] = useState<string | undefined>('');

  const recipeNameLetterCount = `${letterCount}/50`;

  const handleRecipeNameInput = () => {
    if (recipeName) setShowRecipeName(true);
    else {
      onRecipeNameHasError(true);
      setShowRecipeInputError(true);
    }
  };

  const recipeNameElement = showRecipeName ? (
    <StyledRecipeNameFieldWrapper>
      <StyledRecipeName onClick={() => setShowRecipeName(false)}>{recipeName}</StyledRecipeName>
      <StyledPenIcon icon={faPen} onClick={() => setShowRecipeName(false)} />
    </StyledRecipeNameFieldWrapper>
  ) : (
    <StyledRecipeNameFieldWrapper>
      <StyledRecipeNameInput
        autoFocus
        placeholder="Name your recipe"
        value={recipeName}
        onChange={(input: ChangeEvent<HTMLInputElement>) => {
          setShowRecipeInputError(false);

          const trimmedValue = input.target.value.substr(0, 50);
          setLetterCount(trimmedValue.length);
          setRecipeName(trimmedValue);
        }}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            handleRecipeNameInput();
          }
        }}
        hasError={`${showRecipeInputError}`}
      />
      <StyledLetterCounter>{recipeNameLetterCount}</StyledLetterCounter>
      {showRecipeInputError ? (
        <StyledInputErrorMessage>
          You don't forget to name your children, right? Your recipe deserves a good name too.
        </StyledInputErrorMessage>
      ) : null}
    </StyledRecipeNameFieldWrapper>
  );
  return <>{recipeNameElement}</>;
}

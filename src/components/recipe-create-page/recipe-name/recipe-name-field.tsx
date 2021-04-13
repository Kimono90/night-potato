import React, { ChangeEvent, ReactElement, useState } from 'react';
import {
  StyledInputErrorMessage,
  StyledPenIcon,
  StyledRecipeNameInput,
  StyledRecipeName,
} from './recipe-name-field.styles';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onRecipeNameHasError: (hasError: boolean) => void;
};

export function RecipeNameField({ onRecipeNameHasError }: Props): ReactElement {
  const [showRecipeName, setShowRecipeName] = useState<boolean>(false);
  const [showRecipeInputError, setShowRecipeInputError] = useState<boolean>(false);
  const [recipeName, setRecipeName] = useState<string | undefined>('');

  const handleRecipeNameInput = () => {
    if (recipeName) setShowRecipeName(true);
    else {
      onRecipeNameHasError(true);
      setShowRecipeInputError(true);
    }
  };

  const recipeNameElement = showRecipeName ? (
    <div style={{ display: 'flex', width: '50%', position: 'relative' }}>
      <StyledRecipeName onClick={() => setShowRecipeName(false)}>{recipeName}</StyledRecipeName>
      <StyledPenIcon icon={faPen} onClick={() => setShowRecipeName(false)} />
    </div>
  ) : (
    <div style={{ display: 'flex', width: '50%', flexDirection: 'column', alignItems: 'flex-start' }}>
      <StyledRecipeNameInput
        autoFocus
        placeholder="Name your recipe"
        value={recipeName}
        onChange={(input: ChangeEvent<HTMLInputElement>) => {
          setShowRecipeInputError(false);
          setRecipeName(input.target.value);
        }}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            handleRecipeNameInput();
          }
        }}
        onBlur={handleRecipeNameInput}
        hasError={`${showRecipeInputError}`}
      />
      {showRecipeInputError ? (
        <StyledInputErrorMessage>
          You don't forget to name your children, right? Your recipe deserves a good name too.
        </StyledInputErrorMessage>
      ) : null}
    </div>
  );
  return <>{recipeNameElement}</>;
}

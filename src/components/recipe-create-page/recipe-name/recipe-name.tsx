import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';
import { StyledPenIcon, StyledRecipeInput, StyledRecipeName } from './recipe-name.styles';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export function RecipeName() {
  const [showRecipeName, setShowRecipeName] = useState<boolean>(false);
  const [recipeName, setRecipeName] = useState<string>('');

  const recipeNameElement = showRecipeName ? (
    <div style={{ display: 'flex', width: '50%' }}>
      <StyledRecipeName onClick={() => setShowRecipeName(false)}>{recipeName}</StyledRecipeName>
      <StyledPenIcon icon={faPen} />
    </div>
  ) : (
    <div style={{ display: 'flex', width: '50%' }}>
      <StyledRecipeInput
        autoFocus
        placeholder="Name your recipe"
        value={recipeName}
        onChange={(input: ChangeEvent<HTMLInputElement>) => {
          setRecipeName(input.target.value);
        }}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            setShowRecipeName(true);
          }
        }}
      />
    </div>
  );
  return <>{recipeNameElement}</>;
}

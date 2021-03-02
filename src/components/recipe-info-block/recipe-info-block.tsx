import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import { StyledFullRecipeCard, StyledRecipeMetaInfo, StyledRecipeTitle, StyledRecipeInfoBlock } from './recipe-info-block.styles';
import type { IRecipeMetaInfo } from '../../models-and-constants/IRecipe';

type Props = {
  recipeMetaInfo: IRecipeMetaInfo;
};

export default function RecipeInfoBlock({ recipeMetaInfo }: Props) {

  return (
    <StyledRecipeInfoBlock data-label="info-block">
      <h1>Recipe</h1>
      <StyledFullRecipeCard data-label="recipe-card">
        <StyledRecipeTitle data-label="recipe-title">{recipeMetaInfo.name}</StyledRecipeTitle>
        <StyledRecipeMetaInfo data-label="recipe-meta-info">
          <div>
            <FontAwesomeIcon icon={faMale} /> {recipeMetaInfo.portions} persons
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {recipeMetaInfo.prepTimeInMinutes} mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> {recipeMetaInfo.kcalPerPortion} kcal
          </div>
        </StyledRecipeMetaInfo>
      </StyledFullRecipeCard>

    </StyledRecipeInfoBlock>

  );
}

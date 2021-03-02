import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import type { IRecipeInfo } from '../../models-and-constants/IRecipeInfo';
import { StyledFullRecipeCard, StyledRecipeMetaInfo, StyledRecipeTitle, StyledRecipeInfoBlock } from './recipe-info-block.styles';

type Props = {
  recipeId: number;
};

export default function RecipeInfoBlock({ recipeId }: Props) {
  useEffect(() => {
    // Retrieve recipe info based on Id
  }, []);

  let info: IRecipeInfo = {
    name: 'Vegetarian Chickpea Curry',
    portions: 4,
    prepTimeInMinutes: 50,
    kcalPerPortion: 500,
    imgUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
  };

  return (
    <StyledRecipeInfoBlock data-label="info-block">
      <h1>Recipe</h1>
      <StyledFullRecipeCard data-label="recipe-card">
        <StyledRecipeTitle data-label="recipe-title">{info.name}</StyledRecipeTitle>
        <StyledRecipeMetaInfo data-label="recipe-meta-info">
          <div>
            <FontAwesomeIcon icon={faMale} /> {info.portions} persons
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {info.prepTimeInMinutes} mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> {info.kcalPerPortion} kcal
          </div>
        </StyledRecipeMetaInfo>
      </StyledFullRecipeCard>

    </StyledRecipeInfoBlock>

  );
}

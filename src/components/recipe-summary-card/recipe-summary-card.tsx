import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import {
  StyledRecipeSummaryCard,
  StyledRecipeSummaryDescription,
  StyledRecipeSummaryInfo,
  StyledRecipeSummaryTitle,
  StyledRecipeSummaryPhoto
} from './recipe-summary-card.styles';
import type { IRecipeMetaInfo } from '../../models-and-constants/IRecipe';

type props = {
  recipeId: number;
  recipeInfo: IRecipeMetaInfo;
};

export default function RecipeSummaryCard({ recipeId, recipeInfo }: props) {
  const history = useHistory();

  return (
    <StyledRecipeSummaryCard
      data-label="recipe-summary-card"
      onClick={() => history.push(`/summary/${recipeId}`)}
    >
      <StyledRecipeSummaryTitle data-label="recipe-title">{recipeInfo.name}</StyledRecipeSummaryTitle>
      <StyledRecipeSummaryInfo data-label="recipe-info">
        <StyledRecipeSummaryDescription data-label="recipe-description">
          <div>
            <FontAwesomeIcon icon={faMale} /> {recipeInfo.portions} persons
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {recipeInfo.prepTimeInMinutes}{' '}
            mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> {recipeInfo.kcalPerPortion}{' '}
            kcal
          </div>
        </StyledRecipeSummaryDescription>
        <StyledRecipeSummaryPhoto
          data-label="recipe-photo"
          style={{ backgroundImage: `url(${recipeInfo.imgUrl}` }}
        />
      </StyledRecipeSummaryInfo>
    </StyledRecipeSummaryCard>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import {
  StyledOverviewCard,
  StyledOverviewDescription,
  StyledOverviewInfo,
  StyledOverviewTitle,
  StyledOverviewPhoto
} from './overview-card.styles';
import type { IRecipeMetaInfo } from '../../models-and-constants/IRecipe';

type props = {
  recipeId: number;
  recipeInfo: IRecipeMetaInfo;
};

export default function OverviewCard({ recipeId, recipeInfo }: props) {
  const history = useHistory();

  return (
    <StyledOverviewCard
      data-label="recipe-summary-card"
      onClick={() => history.push(`/summary/${recipeId}`)}
    >
      <StyledOverviewTitle data-label="recipe-title">{recipeInfo.name}</StyledOverviewTitle>
      <StyledOverviewInfo data-label="recipe-info">
        <StyledOverviewDescription data-label="recipe-description">
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
        </StyledOverviewDescription>
        <StyledOverviewPhoto
          data-label="recipe-photo"
          style={{ backgroundImage: `url(${recipeInfo.imgUrls}` }}
        />
      </StyledOverviewInfo>
    </StyledOverviewCard>
  );
}

import React from 'react';
import {
  faClock,
  faHamburger,
  faUser,
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
import { OverviewCardIcon } from './overview-card-icon';

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
          <OverviewCardIcon faIcon={faUser} iconText={`${recipeInfo.portions} persons`} />
          <OverviewCardIcon faIcon={faClock} iconText={`${recipeInfo.prepTimeInMinutes} mins`} />
          <OverviewCardIcon faIcon={faHamburger} iconText={`${recipeInfo.kcalPerPortion} kcal`} />
        </StyledOverviewDescription>
        <StyledOverviewPhoto
          data-label="recipe-photo"
          style={{ backgroundImage: `url(${recipeInfo.imgUrls[0]}` }}
        />
      </StyledOverviewInfo>
    </StyledOverviewCard>
  );
}

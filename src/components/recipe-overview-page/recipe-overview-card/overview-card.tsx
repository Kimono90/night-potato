import React from 'react';
import { faClock, faHamburger, faUser } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import {
  StyledOverviewCard,
  StyledOverviewDescription,
  StyledOverviewInfo,
  StyledOverviewTitle,
  StyledOverviewPhoto,
} from './overview-card.styles';
import type { IRecipeMetaInfo } from '../../../models-and-constants/IRecipe';
import { OverviewCardIcon } from './overview-card-icon';

type props = {
  recipeId: string;
  recipeInfo: IRecipeMetaInfo;
};

export default function OverviewCard({ recipeId, recipeInfo }: props) {
  const history = useHistory();
  const imgUrl = recipeInfo.imgUrl
    ? recipeInfo.imgUrl
    : 'https://cdn.pixabay.com/photo/2020/04/13/20/42/potato-5039995__480.png';

  const portionIconText = recipeInfo.portions
    ? `${recipeInfo.portions} ${recipeInfo.portions > 1 ? 'portions' : 'portion'}`
    : '';

  return (
    <StyledOverviewCard data-label="recipe-summary-card" onClick={() => history.push(`/summary/${recipeId}`)}>
      <StyledOverviewTitle data-label="recipe-title">{recipeInfo.name}</StyledOverviewTitle>
      <StyledOverviewInfo data-label="recipe-info">
        <StyledOverviewDescription data-label="recipe-description">
          <OverviewCardIcon faIcon={faUser} iconText={portionIconText} />
          <OverviewCardIcon faIcon={faClock} iconText={`${recipeInfo.prepTimeInMinutes} mins`} />
          <OverviewCardIcon faIcon={faHamburger} iconText={`${recipeInfo.kcalPerPortion} kcal`} />
        </StyledOverviewDescription>
        <StyledOverviewPhoto data-label="recipe-photo" style={{ backgroundImage: `url(${imgUrl}` }}>
          {!recipeInfo.imgUrl ? (
            <p
              style={{
                position: 'relative',
                height: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                top: '40%',
              }}
            >
              No photo available
            </p>
          ) : null}
        </StyledOverviewPhoto>
      </StyledOverviewInfo>
    </StyledOverviewCard>
  );
}

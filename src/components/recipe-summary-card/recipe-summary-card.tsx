import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './recipe-summary-card.scss';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { IRecipeInfo } from '../../models-and-constants/IRecipeInfo';

type props = {
  recipeId: number;
  recipeInfo: IRecipeInfo;
};

export default function RecipeSummaryCard({ recipeId, recipeInfo }: props) {
  const history = useHistory();

  return (
    <div
      className="recipe-summary-card"
      onClick={() => history.push(`/summary/${recipeId}`)}
    >
      <div className="recipe-title">{recipeInfo.name}</div>
      <div className="recipe-info-part">
        <div className="recipe-info">
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
        </div>
        <div
          className="recipe-photo"
          style={{ backgroundImage: `url(${recipeInfo.imgUrl}` }}
        />
      </div>
    </div>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './recipe-summary-card.scss';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

type props = {
  recipeId: number;
  recipeName: string;
  portions: number;
  prepTimeInMinutes: number;
  kcalPerPortion: number;
  imgUrl: string;
};

export default function RecipeSummaryCard({
  recipeId,
  recipeName,
  portions,
  prepTimeInMinutes,
  kcalPerPortion,
  imgUrl,
}: props) {
  const history = useHistory();

  return (
    <div
      className="recipe-card"
      onClick={() => history.push(`/summary/${recipeId}`)}
    >
      <div className="recipe-title">{recipeName}</div>
      <div className="recipe-info-block">
        <div className="recipe-info">
          <div>
            <FontAwesomeIcon icon={faMale} /> {portions} persons
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {prepTimeInMinutes} mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> {kcalPerPortion} kcal
          </div>
        </div>
        <div
          className="recipe-photo"
          style={{ backgroundImage: `url(${imgUrl}` }}
        />
      </div>
    </div>
  );
}

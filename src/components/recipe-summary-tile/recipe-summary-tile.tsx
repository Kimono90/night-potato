import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../recipe-summary-tile/recipe-summary-tile.scss';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';

type props = {
  recipeName: string;
  portions: number;
  prepTimeInMinutes: number;
  kcalPerPortion: number;
  imgUrl: string;
};

export default function RecipeSummaryTile({
  recipeName,
  portions,
  prepTimeInMinutes,
  kcalPerPortion,
  imgUrl,
}: props) {
  return (
    <div className="recipe-tile">
      <div className="recipe-title">
        <strong>{recipeName}</strong>
      </div>
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

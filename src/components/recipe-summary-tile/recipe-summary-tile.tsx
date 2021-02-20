import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../recipe-summary-tile/recipe-summary-tile.scss';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';

export default function RecipeSummaryTile() {
  return (
    <div className="recipe-tile">
      <div className="recipe-title">
        <strong>Vegetarian Chickpea Curry</strong>
      </div>
      <div className="recipe-info-block">
        <div className="recipe-info">
          <div>
            <FontAwesomeIcon icon={faMale} /> - 4
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> - 50 mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> - 500 kcal
          </div>
        </div>
        <div
          style={{
            maxWidth: '50%',
            maxHeight: '100%',
            padding: '0',
            margin: '0',
          }}
        >
          <img
            className="recipe-photo"
            src="https://www.eefkooktzo.nl/wp-content/uploads/2020/04/Indiase-curry-met-paneer.jpg"
            alt="curry"
          ></img>
        </div>
      </div>
    </div>
  );
}

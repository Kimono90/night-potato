import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../recipe-summary-tile/recipe-summary-tile.scss';

export default function RecipeSummaryTile() {
  return (
    <div className="recipe-tile">
      <div className="recipe-title">
        <strong>Vegetarian Chickpea Curry</strong>
      </div>
      <div className="recipe-info-block">
        <div className="recipe-info">
          <p>
            <FontAwesomeIcon icon={['fas', 'male']} /> - 4
          </p>
          <p>
            <FontAwesomeIcon icon={['far', 'clock']} /> - 50 mins
          </p>
          <p>
            <FontAwesomeIcon icon={['fas', 'hamburger']} /> - 500 kcal
          </p>
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

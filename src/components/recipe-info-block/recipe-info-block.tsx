import React, { useEffect } from 'react';
import { IRecipeInfo } from '../../models-and-constants/IRecipeInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import './recipe-info-block.scss';

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
    <div className="recipe-info-block">
      <h1>Recipe</h1>
      <div className="recipe-card">
        <div className="recipe-title">{info.name}</div>
        <div className="recipe-meta-info">
          <div>
            <FontAwesomeIcon icon={faMale} /> {info.portions} persons
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {info.prepTimeInMinutes} mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> {info.kcalPerPortion} kcal
          </div>
        </div>
      </div>
    </div>
  );
}

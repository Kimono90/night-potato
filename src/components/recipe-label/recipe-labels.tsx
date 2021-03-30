import { faBacon, faBreadSlice, faEgg, faFish, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { RecipeLabel } from './recipe-label';
import type { ReactElement } from 'react';

export const getFishLabel = (): ReactElement =>
  RecipeLabel({ icon: faFish, text: 'Fish', backgroundColor: 'deepskyblue' });

export const getMeatLabel = (): ReactElement =>
  RecipeLabel({ icon: faBacon, text: 'Meat', backgroundColor: 'indianred' });

export const getVegetarianLabel = (): ReactElement =>
  RecipeLabel({ icon: faLeaf, text: 'Vegetarian', backgroundColor: 'mediumspringgreen' });

export const getVeganLabel = (): ReactElement =>
  RecipeLabel({ icon: faSeedling, text: 'Vegan', backgroundColor: 'mediumseagreen' });

export const getGlutenFreeLabel = (): ReactElement =>
  RecipeLabel({ icon: faBreadSlice, text: 'Gluten free', backgroundColor: 'saddlebrown' });

export const getLactoseFreeLabel = (): ReactElement =>
  RecipeLabel({ icon: faEgg, text: 'Dairy free', backgroundColor: 'sandybrown' });

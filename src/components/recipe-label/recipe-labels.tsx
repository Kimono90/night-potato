import React from 'react';
import { faBacon, faBreadSlice, faEgg, faFish, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { RecipeLabel } from './recipe-label';
import type { ReactElement } from 'react';
import { labels } from './label-constants';

export const LabelDictionary = new Map<string, ReactElement>([
  [labels.vegetarian, <RecipeLabel key="vegetarian" icon={faLeaf} text="Vegetarian" backgroundColor="mediumspringgreen" />],
  [labels.vegan, <RecipeLabel key="vegan" icon={faSeedling} text="Vegan" backgroundColor="mediumseagreen" />],
  [labels.glutenFree, <RecipeLabel key="gluten" icon={faBreadSlice} text="Gluten free" backgroundColor="sandybrown" />],
  [labels.dairyFree, <RecipeLabel key="dairy" icon={faEgg} text="Dairy free" backgroundColor="deepskyblue" />],
]);

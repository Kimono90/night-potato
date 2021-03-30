import React from 'react';
import { faBacon, faBreadSlice, faEgg, faFish, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { RecipeLabel } from './recipe-label';
import type { ReactElement } from 'react';
import { labels } from './label-constants';

export const LabelDictionary = new Map<string, ReactElement>([
  [labels.meat, <RecipeLabel icon={faBacon} text="Meat" backgroundColor="indianred" />],
  [labels.fish, <RecipeLabel icon={faFish} text="Fish" backgroundColor="deepskyblue" />],
  [labels.vegetarian, <RecipeLabel icon={faLeaf} text="Vegetarian" backgroundColor="mediumspringgreen" />],
  [labels.vegan, <RecipeLabel icon={faSeedling} text="Vegan" backgroundColor="mediumseagreen" />],
  [labels.glutenFree, <RecipeLabel icon={faBreadSlice} text="Gluten free" backgroundColor="saddlebrown" />],
  [labels.dairyFree, <RecipeLabel icon={faEgg} text="Dairy free" backgroundColor="sandybrown" />],
]);

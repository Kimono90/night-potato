import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale,
} from '@fortawesome/free-solid-svg-icons';
import { StyledMetaInfo, StyledInfoBlock } from './meta-info-block.styles';
import type { IRecipeMetaInfo } from '../../models-and-constants/IRecipe';
import { StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';

type Props = {
  recipeMetaInfo: IRecipeMetaInfo;
};

export default function MetaInfoBlock({ recipeMetaInfo }: Props) {

  return (
    <StyledInfoBlock data-label="info-block">
      <h1>Recipe</h1>
      <StyledSummaryCard data-label="summary-card">
        <StyledTitle data-label="recipe-title">{recipeMetaInfo.name}</StyledTitle>
        <StyledMetaInfo data-label="recipe-meta-info">
          <div>
            <FontAwesomeIcon icon={faMale} /> {recipeMetaInfo.portions} persons
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} /> {recipeMetaInfo.prepTimeInMinutes} mins
          </div>
          <div>
            <FontAwesomeIcon icon={faHamburger} /> {recipeMetaInfo.kcalPerPortion} kcal
          </div>
        </StyledMetaInfo>
      </StyledSummaryCard>

    </StyledInfoBlock>

  );
}

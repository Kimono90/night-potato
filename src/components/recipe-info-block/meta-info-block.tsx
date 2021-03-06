import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHamburger,
  faMale, faMinusCircle, faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { StyledMetaInfoContent, StyledInfoBlock, StyledMetaInfoObject, StyledMetaInfoIcon } from './meta-info-block.styles';
import type { IRecipeMetaInfo } from '../../models-and-constants/IRecipe';
import { StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';

type Props = {
  recipeMetaInfo: IRecipeMetaInfo;
  onChangePortions: (action: string) => void;
};

export default function MetaInfoBlock({ recipeMetaInfo, onChangePortions }: Props) {
  const minus = '-';
  const plus = '+';

  return (
    <StyledInfoBlock data-label="info-block">
      <StyledSummaryCard data-label="summary-card">
        <StyledTitle data-label="recipe-title">{recipeMetaInfo.name}</StyledTitle>
        <StyledMetaInfoContent data-label="meta-info-content">
          <StyledMetaInfoObject data-label="meta-info-object" style={{margin: '0'}}>
            <StyledMetaInfoIcon data-label="meta-info-icon">
              <FontAwesomeIcon icon={faMinusCircle} style={{fontSize: '1rem', cursor: 'pointer'}} onClick={() => onChangePortions(minus)} />
              <FontAwesomeIcon icon={faMale} style={{fontSize: '2rem'}}/>
              <FontAwesomeIcon icon={faPlusCircle} style={{fontSize: '1rem' , cursor: 'pointer'}} onClick={() => onChangePortions(plus)} />
            </StyledMetaInfoIcon>
            {recipeMetaInfo.portions} portions
          </StyledMetaInfoObject>
          <StyledMetaInfoObject>
            <StyledMetaInfoIcon>
              <FontAwesomeIcon icon={faClock} style={{fontSize: '2rem'}} />
            </StyledMetaInfoIcon>
            {recipeMetaInfo.prepTimeInMinutes} mins
          </StyledMetaInfoObject>
          <StyledMetaInfoObject>
            <StyledMetaInfoIcon>
            <FontAwesomeIcon icon={faHamburger} style={{fontSize: '2rem'}} />
            </StyledMetaInfoIcon>
            {recipeMetaInfo.kcalPerPortion} kcal
          </StyledMetaInfoObject>
        </StyledMetaInfoContent>
      </StyledSummaryCard>
    </StyledInfoBlock>
  );
}

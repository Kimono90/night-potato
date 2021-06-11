import React from 'react';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { ActiveLabelDictionary } from '../../recipe-label/recipe-labels';
import { allLabels } from '../../recipe-label/label-constants';
import { StyledLabelBlock } from './meta-info-card.styles';

export function MetaInfoCard() {
  return (
    <StyledSummaryCard>
      <StyledTitle data-label="title">Recipe details</StyledTitle>
      <StyledBody>
        <StyledLabelBlock>{allLabels.map((l) => ActiveLabelDictionary.get(l.value))}</StyledLabelBlock>
      </StyledBody>
    </StyledSummaryCard>
  );
}

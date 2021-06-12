import React from 'react';
import { StyledBody, StyledNumericField, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { ActiveLabelDictionary } from '../../recipe-label/recipe-labels';
import { allLabels } from '../../recipe-label/label-constants';
import {
  StyledDetailsBlock,
  StyledDetailsItem,
  StyledDetailsItemLabel,
  StyledLabelBlock,
  StyledLabelList,
} from './meta-info-card.styles';

export function MetaInfoCard() {
  return (
    <StyledSummaryCard>
      <StyledTitle data-label="title">Recipe details</StyledTitle>
      <StyledBody>
        <StyledDetailsBlock>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Portions* </StyledDetailsItemLabel>
            <StyledNumericField />
          </StyledDetailsItem>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Cooking time* </StyledDetailsItemLabel>
            <StyledNumericField placeholder="minutes" />
          </StyledDetailsItem>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Kcal* </StyledDetailsItemLabel>
            <StyledNumericField />
          </StyledDetailsItem>
        </StyledDetailsBlock>
        <StyledLabelBlock>
          <StyledDetailsItemLabel>Labels </StyledDetailsItemLabel>
          <StyledLabelList>{allLabels.map((l) => ActiveLabelDictionary.get(l.value))}</StyledLabelList>
        </StyledLabelBlock>
      </StyledBody>
    </StyledSummaryCard>
  );
}

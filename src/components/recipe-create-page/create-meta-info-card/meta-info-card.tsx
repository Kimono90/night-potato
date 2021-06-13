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
import { IRecipeMetaInfo } from '../../../models-and-constants/IRecipe';

type Props = {
  metaInfo: IRecipeMetaInfo;
  onMetaInfoChange: (metaInfo: IRecipeMetaInfo) => void;
  metaInfoHasError: boolean;
};

export function MetaInfoCard({ metaInfo, onMetaInfoChange, metaInfoHasError }: Props) {
  return (
    <StyledSummaryCard>
      <StyledTitle data-label="title">Recipe details</StyledTitle>
      <StyledBody>
        <StyledDetailsBlock>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Portions* </StyledDetailsItemLabel>
            <StyledNumericField
              type="number"
              onChange={(e) =>
                onMetaInfoChange({
                  ...metaInfo,
                  portions: Number(e.target.value),
                })
              }
              hasError={`${!metaInfo.portions && metaInfoHasError}`}
            />
          </StyledDetailsItem>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Cooking time* </StyledDetailsItemLabel>
            <StyledNumericField
              type="number"
              placeholder="minutes"
              onChange={(e) =>
                onMetaInfoChange({
                  ...metaInfo,
                  prepTimeInMinutes: Number(e.target.value),
                })
              }
              hasError={`${!metaInfo.prepTimeInMinutes && metaInfoHasError}`}
            />
          </StyledDetailsItem>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Kcal </StyledDetailsItemLabel>
            <StyledNumericField
              type="number"
              onChange={(e) =>
                onMetaInfoChange({
                  ...metaInfo,
                  kcalPerPortion: Number(e.target.value),
                })
              }
            />
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

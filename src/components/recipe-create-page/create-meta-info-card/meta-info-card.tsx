import React from 'react';
import { StyledBody, StyledNumericField, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { labels } from '../../recipe-label/label-constants';
import {
  StyledDetailsBlock,
  StyledDetailsItem,
  StyledDetailsItemLabel,
  StyledLabelBlock,
  StyledLabelList,
} from './meta-info-card.styles';
import { IRecipeMetaInfo } from '../../../models-and-constants/IRecipe';
import { RecipeLabel } from '../../recipe-label/recipe-label';
import { faBreadSlice, faEgg, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';

type Props = {
  metaInfo: IRecipeMetaInfo;
  onMetaInfoChange: (metaInfo: IRecipeMetaInfo) => void;
  metaInfoHasError: boolean;
};

export function MetaInfoCard({ metaInfo, onMetaInfoChange, metaInfoHasError }: Props) {
  function handleLabelChange(isActive: boolean, label: string) {
    if (isActive) onMetaInfoChange({ ...metaInfo, labels: [...metaInfo.labels, label] });
    else {
      const newMetaInfoLabels = metaInfo.labels.filter((m) => m !== label);
      onMetaInfoChange({ ...metaInfo, labels: newMetaInfoLabels });
    }
  }

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
          <StyledLabelList>
            <RecipeLabel
              key="vegetarian"
              icon={faLeaf}
              text="Vegetarian"
              backgroundColor="mediumspringgreen"
              clickAble={true}
              onChange={(isActive) => handleLabelChange(isActive, labels.vegetarian)}
            />
            <RecipeLabel
              key="vegan"
              icon={faSeedling}
              text="Vegan"
              backgroundColor="mediumseagreen"
              clickAble={true}
              onChange={(isActive) => handleLabelChange(isActive, labels.vegan)}
            />
            <RecipeLabel
              key="gluten"
              icon={faBreadSlice}
              text="Gluten free"
              backgroundColor="sandybrown"
              clickAble={true}
              onChange={(isActive) => handleLabelChange(isActive, labels.glutenFree)}
            />
            <RecipeLabel
              key="dairy"
              icon={faEgg}
              text="Dairy free"
              backgroundColor="deepskyblue"
              clickAble={true}
              onChange={(isActive) => handleLabelChange(isActive, labels.dairyFree)}
            />
          </StyledLabelList>
        </StyledLabelBlock>
      </StyledBody>
    </StyledSummaryCard>
  );
}

import React, { ReactElement } from 'react';
import { StyledBody, StyledNumericField, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { recipeLabels } from '../../recipe-label/label-constants';
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
import { colors } from '../../../styles/potato-styles';

type Props = {
  metaInfo: IRecipeMetaInfo;
  onMetaInfoChange: (metaInfo: IRecipeMetaInfo) => void;
  metaInfoHasError: boolean;
};

export function MetaInfoCard({ metaInfo, onMetaInfoChange, metaInfoHasError }: Props): ReactElement {
  function handleLabelChange(isActive: boolean, label: string) {
    if (isActive) onMetaInfoChange({ ...metaInfo, labels: [...metaInfo.labels, label] });
    else {
      const newMetaInfoLabels = metaInfo.labels?.filter((m) => m !== label);
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
              value={metaInfo?.portions}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                if (!Number(event.target.value)) event.target.value = '';
                onMetaInfoChange({
                  ...metaInfo,
                  portions: Number(event.target.value),
                });
              }}
              hasError={`${metaInfoHasError && !metaInfo.portions}`}
            />
          </StyledDetailsItem>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Cooking time* </StyledDetailsItemLabel>
            <StyledNumericField
              placeholder="minutes"
              value={metaInfo?.prepTimeInMinutes}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                if (!Number(event.target.value)) event.target.value = '';
                onMetaInfoChange({
                  ...metaInfo,
                  prepTimeInMinutes: Number(event.target.value),
                });
              }}
              hasError={`${metaInfoHasError && !metaInfo.prepTimeInMinutes}`}
            />
          </StyledDetailsItem>
          <StyledDetailsItem>
            <StyledDetailsItemLabel>Kcal </StyledDetailsItemLabel>
            <StyledNumericField
              value={metaInfo?.kcalPerPortion}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                if (!Number(event.target.value)) event.target.value = '';
                onMetaInfoChange({
                  ...metaInfo,
                  kcalPerPortion: Number(event.target.value),
                });
              }}
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
              clickAble
              backgroundColor={colors.vegetarianLabel}
              labelActive={metaInfo.labels ? metaInfo.labels.includes(recipeLabels.vegetarian) : false}
              onChange={(isActive) => handleLabelChange(isActive, recipeLabels.vegetarian)}
            />
            <RecipeLabel
              key="vegan"
              icon={faSeedling}
              text="Vegan"
              clickAble
              backgroundColor={colors.veganLabel}
              labelActive={metaInfo.labels ? metaInfo.labels.includes(recipeLabels.vegan) : false}
              onChange={(isActive) => handleLabelChange(isActive, recipeLabels.vegan)}
            />
            <RecipeLabel
              key="gluten"
              icon={faBreadSlice}
              text="Gluten free"
              clickAble
              backgroundColor={colors.glutenLabel}
              labelActive={metaInfo.labels ? metaInfo.labels.includes(recipeLabels.glutenFree) : false}
              onChange={(isActive) => handleLabelChange(isActive, recipeLabels.glutenFree)}
            />
            <RecipeLabel
              key="dairy"
              icon={faEgg}
              text="Dairy free"
              clickAble
              backgroundColor={colors.dairyLabel}
              labelActive={metaInfo.labels ? metaInfo.labels.includes(recipeLabels.dairyFree) : false}
              onChange={(isActive) => handleLabelChange(isActive, recipeLabels.dairyFree)}
            />
          </StyledLabelList>
        </StyledLabelBlock>
      </StyledBody>
    </StyledSummaryCard>
  );
}

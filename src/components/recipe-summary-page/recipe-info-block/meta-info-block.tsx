import React from 'react';
import { faClock, faHamburger, faMinusCircle, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import type { IRecipeMetaInfo } from '../../../models-and-constants/IRecipe';
import { MetaInfoBlockWrapper } from './meta-info-block-wrapper';
import { MetaInfoItem } from './meta-info-item';
import {
  StyledMetaInfoContentWithLabels,
  StyledMetaInfoContentWithoutLabels,
  StyledMetaInfoItem,
} from './meta-info-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LabelDictionary } from '../../recipe-label/recipe-labels';

export type Props = {
  recipeMetaInfo: IRecipeMetaInfo;
  onChangePortions: (action: string) => void;
};

export default function MetaInfoBlock({ recipeMetaInfo, onChangePortions }: Props) {
  const minus = '-';
  const plus = '+';

  return (
    <MetaInfoBlockWrapper recipeName={recipeMetaInfo.name}>
      <StyledMetaInfoContentWithoutLabels data-label="without-labels">
        <StyledMetaInfoItem data-testid="portions">
          <div>
            <FontAwesomeIcon
              data-testid="minus-portions"
              icon={faMinusCircle}
              style={{ fontSize: '1rem', cursor: 'pointer' }}
              onClick={() => onChangePortions(minus)}
            />
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1rem' }} />
            <FontAwesomeIcon
              data-testid="plus-portions"
              icon={faPlusCircle}
              style={{ fontSize: '1rem', cursor: 'pointer' }}
              onClick={() => onChangePortions(plus)}
            />
          </div>
          {recipeMetaInfo.portions} portions
        </StyledMetaInfoItem>
        <MetaInfoItem label="prep-time" faIcon={faClock} iconText={`${recipeMetaInfo.prepTimeInMinutes} minutes`} />
        <MetaInfoItem label="kcal" faIcon={faHamburger} iconText={`${recipeMetaInfo.kcalPerPortion} kcal`} />
      </StyledMetaInfoContentWithoutLabels>
      <StyledMetaInfoContentWithLabels data-testid="labels">
        {recipeMetaInfo.labels?.map((l) => LabelDictionary.get(l))}
      </StyledMetaInfoContentWithLabels>
    </MetaInfoBlockWrapper>
  );
}

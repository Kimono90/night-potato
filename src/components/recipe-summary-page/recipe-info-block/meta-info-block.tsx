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

type Props = {
  recipeMetaInfo: IRecipeMetaInfo;
  onChangePortions: (action: string) => void;
};

export default function MetaInfoBlock({ recipeMetaInfo, onChangePortions }: Props) {
  const minus = '-';
  const plus = '+';

  return (
    <MetaInfoBlockWrapper recipeName={recipeMetaInfo.name}>
      <StyledMetaInfoContentWithoutLabels data-label="without-labels">
        <StyledMetaInfoItem>
          <div>
            <FontAwesomeIcon
              icon={faMinusCircle}
              style={{ fontSize: '1rem', cursor: 'pointer' }}
              onClick={() => onChangePortions(minus)}
            />
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1rem' }} />
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{ fontSize: '1rem', cursor: 'pointer' }}
              onClick={() => onChangePortions(plus)}
            />
          </div>
          {recipeMetaInfo.portions} portions
        </StyledMetaInfoItem>
        <MetaInfoItem faIcon={faClock} iconText={`${recipeMetaInfo.prepTimeInMinutes} minutes`} />
        <MetaInfoItem faIcon={faHamburger} iconText={`${recipeMetaInfo.kcalPerPortion} kcal`} />
      </StyledMetaInfoContentWithoutLabels>
      <StyledMetaInfoContentWithLabels>
        {recipeMetaInfo.labels.map((l) => LabelDictionary.get(l))}
      </StyledMetaInfoContentWithLabels>
    </MetaInfoBlockWrapper>
  );
}
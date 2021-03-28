import React, { useEffect, useState } from 'react';
import type { IEquipment, IIngredient } from '../../models-and-constants/IRecipe';
import { StyledSummaryCard } from '../shared-styles/shared-styles';
import {
  StyledCopiedConfirmation,
  StyledCopyButton,
  StyledEquipment,
  StyledTabList,
  StyledTabTitle,
} from './ingredients-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Ingredient } from './ingredient';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

type Props = {
  ingredients: IIngredient[];
  equipment: IEquipment[];
  onIngredientChange: (newIngredients: IIngredient[]) => void;
};

export default function IngredientsBlock({ ingredients, onIngredientChange, equipment }: Props) {
  const [showIngredients, setShowIngredients] = useState<boolean>(true);
  const [textToCopy, setTextToCopy] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    const ingredientList = ingredients.map((i) => `${i.amount} ${i.measurement} - ${i.product}`);
    const totalList = ingredientList.join('\n').concat('\n \n');
    const finalCopyText = totalList.concat(`recipe found at ${window.location}`);
    setTextToCopy(finalCopyText);
  }, [ingredients]);

  const toggleChecked = (ingredient: IIngredient) => {
    const igs = [...ingredients];
    const toUpdate = igs.find((i) => i.id === ingredient.id);
    if (toUpdate) toUpdate.isChecked = !ingredient.isChecked;
    onIngredientChange(igs);
  };

  const ingredientList = ingredients.map((i: IIngredient) => (
    <Ingredient ingredient={i} toggleChecked={toggleChecked} />
  ));

  const equipmentList = equipment.map((e: IEquipment) => (
    <StyledEquipment>
      <FontAwesomeIcon icon={faUtensils} />
      <span style={{ marginLeft: '1rem' }}>{e.name}</span>
    </StyledEquipment>
  ));

  return (
    <StyledSummaryCard data-label="summary-card">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <StyledTabTitle data-label="title" onClick={() => setShowIngredients(true)} visible={showIngredients}>
            <span style={{ display: `${isCopied ? 'none' : 'block'}` }}>Ingredients</span>
            <StyledCopyButton
              icon={faCopy}
              isCopied={isCopied}
              onClick={() => {
                navigator.clipboard
                  .writeText(textToCopy)
                  .then(() => {
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 1000);
                  })
                  .catch(() => {
                    //TODO: error handling
                  });
              }}
            />
            <StyledCopiedConfirmation isCopied={isCopied}>Copied :)</StyledCopiedConfirmation>
          </StyledTabTitle>
          <StyledTabTitle data-label="title" onClick={() => setShowIngredients(false)} visible={!showIngredients}>
            Equipment
          </StyledTabTitle>
        </div>
        <StyledTabList data-label="ingredient-list" visible={showIngredients}>
          {ingredientList}
        </StyledTabList>
        <StyledTabList data-label="tool-list" visible={!showIngredients}>
          {equipmentList}
        </StyledTabList>
      </div>
    </StyledSummaryCard>
  );
}

import React, { useEffect, useState } from 'react';
import type { IEquipment, IIngredient } from '../../../models-and-constants/IRecipe';
import { StyledSummaryCard } from '../../shared-styles/shared-styles';
import { StyledCopiedConfirmation, StyledCopyButton, StyledTabList, StyledTabTitle } from './ingredients-block.styles';
import { Ingredient } from './ingredient';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Equipment } from './equipment';

type Props = {
  ingredients: IIngredient[];
  equipment: IEquipment[];
};

export default function IngredientsBlock({ ingredients, equipment }: Props) {
  const [showIngredients, setShowIngredients] = useState<boolean>(true);
  const [textToCopy, setTextToCopy] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    const ingredientList = ingredients.map((i) => `${i.amount} ${i.measurement} - ${i.product}`);
    const totalList = ingredientList.join('\n').concat('\n \n');
    const finalCopyText = totalList.concat(`recipe found at ${window.location}`);
    setTextToCopy(finalCopyText);
  }, [ingredients]);

  const ingredientList = ingredients.map((i: IIngredient) => <Ingredient key={i.id} ingredient={i} />);

  const equipmentList = equipment.map((e: IEquipment) => <Equipment key={e.id} equipmentItem={e} />);

  return (
    <StyledSummaryCard data-label="summary-card">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <StyledTabTitle data-label="title" onClick={() => setShowIngredients(true)} visible={showIngredients}>
            <span style={{ display: `${isCopied ? 'none' : 'block'}` }}>Ingredients</span>
            <StyledCopyButton
              icon={faCopy}
              copied={`${isCopied}`}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(textToCopy);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 1000);
                } catch (e) {
                  // TODO: Error handling
                }
              }}
            />
            <StyledCopiedConfirmation copied={`${isCopied}`}>Copied :)</StyledCopiedConfirmation>
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

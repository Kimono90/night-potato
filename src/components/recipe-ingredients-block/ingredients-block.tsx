import React, { useState } from 'react';
import type { IEquipment, IIngredient } from '../../models-and-constants/IRecipe';
import { StyledSummaryCard } from '../shared-styles/shared-styles';
import { StyledEquipment, StyledIngredient, StyledTabList, StyledTabTitle } from './ingredients-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  ingredients: IIngredient[];
  equipment: IEquipment[];
  onIngredientChange: (newIngredients: IIngredient[]) => void;
}

export default function IngredientsBlock({ingredients, onIngredientChange, equipment}: Props) {
  const [showIngredients, setShowIngredients] = useState<boolean>(true);

  const toggleChecked = (ingredient: IIngredient) => {
    const igs = [...ingredients];

    const toUpdate = igs.find((i) => i.id === ingredient.id);
    if (toUpdate) toUpdate.isChecked = !ingredient.isChecked

    onIngredientChange(igs);
  }

  const ingredientList = ingredients.map((i: IIngredient) => {
    return (<StyledIngredient key={`${i.id}`} data-label="ingredient">
      <FontAwesomeIcon icon={i.isChecked ? faCheckSquare : faSquare} onClick={() => toggleChecked(i)} />
      <p>
        <span style={{textDecoration: i.isChecked ? 'line-through': 'none'}} id="amount">{i.amount} {i.measurement}</span>
        <span style={{textDecoration: i.isChecked ? 'line-through': 'none'}} id="product"> {i.product}</span>
      </p>
    </StyledIngredient>)
  })

  const equipmentList = equipment.map((e: IEquipment) => <StyledEquipment>
    <FontAwesomeIcon icon={faUtensils}/>
    <span style={{marginLeft: '1rem'}}>{e.name}</span>
  </StyledEquipment>)

  return (
    <StyledSummaryCard data-label="summary-card">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <StyledTabTitle
            data-label="title"
            onClick={() => setShowIngredients(true)}
            visible={showIngredients}
          >Ingredients</StyledTabTitle>
          <StyledTabTitle
            data-label="title"
            onClick={() => setShowIngredients(false)}
            visible={!showIngredients}
          >Equipment</StyledTabTitle>
        </div>
          <StyledTabList data-label="ingredient-list" visible={showIngredients}>
            {ingredientList}
          </StyledTabList>
          <StyledTabList data-label="tool-list" visible={!showIngredients}>
            {equipmentList}
          </StyledTabList>
      </div>
    </StyledSummaryCard>
  )
}

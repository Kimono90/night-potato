import React from 'react';
import { StyledEquipment } from './ingredients-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import type { IEquipment } from '../../models-and-constants/IRecipe';

type Props = {
  equipmentItem: IEquipment;
};

export function Equipment({ equipmentItem }: Props) {
  return (
    <StyledEquipment>
      <FontAwesomeIcon icon={faUtensils} />
      <span style={{ marginLeft: '1rem' }}>{equipmentItem.name}</span>
    </StyledEquipment>
  );
}

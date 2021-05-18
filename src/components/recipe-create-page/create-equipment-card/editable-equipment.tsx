import React, { ReactElement, useEffect, useState } from 'react';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { IEquipment } from '../../../models-and-constants/IRecipe';
import { StyledTextField } from '../../shared-styles/shared-styles';
import { useMinPlusListLogic } from '../../../hooks/use-min-plus-list-logic';
import { StyledFontAwesomeIcon } from '../create-ingredients-card/create-ingredients-card.styles';
import { StyledCreateEquipmentItem } from './create-equipment-card.styles';

type Props = {
  currentEquipment: IEquipment;
  allEquipments: IEquipment[];
  onEquipmentChange: (equipment: IEquipment) => void;
  onMinusButtonClick: (id: string) => void;
  onPlusButtonClick: () => void;
};

export function EditableEquipment({
  currentEquipment,
  allEquipments,
  onEquipmentChange,
  onMinusButtonClick,
  onPlusButtonClick,
}: Props): ReactElement {
  const [equipment, setEquipment] = useState<IEquipment>(currentEquipment);
  const [equipmentNameHasError, setEquipmentNameHasError] = useState<boolean>(false);
  const [equipmentNameTouched, setEquipmentNameTouched] = useState<boolean>(false);
  const [minusButtonState, plusButtonState] = useMinPlusListLogic(
    currentEquipment.id,
    allEquipments.flatMap((i) => i.id),
  );

  useEffect(() => {
    if (equipment.name) {
      onEquipmentChange(equipment);
    } else {
      setEquipmentNameHasError(!equipment.name);
    }
  }, [equipment]);

  const handlePlusButtonClick = (): void => {
    setEquipmentNameTouched(true);

    if (equipment.name) {
      plusButtonState.set(false);
      onPlusButtonClick();
    } else {
      setEquipmentNameHasError(!equipment.name);
    }
  };

  const plusButtonComponent = plusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faPlusCircle} onClick={() => handlePlusButtonClick()} />
  ) : null;

  const minusButtonComponent = minusButtonState.show ? (
    <StyledFontAwesomeIcon icon={faMinusCircle} onClick={() => onMinusButtonClick(currentEquipment.id)} />
  ) : null;

  return (
    <StyledCreateEquipmentItem>
      <StyledTextField
        placeholder="equipment name"
        value={equipment.name}
        onChange={(event) => {
          setEquipmentNameHasError(false);
          setEquipment({ ...equipment, name: event.target.value });
        }}
        onBlur={() => setEquipmentNameTouched(true)}
        hasError={`${equipmentNameHasError && equipmentNameTouched}`}
      />
      <div style={{ marginRight: '1rem' }}>
        {minusButtonComponent}
        {plusButtonComponent}
      </div>
    </StyledCreateEquipmentItem>
  );
}

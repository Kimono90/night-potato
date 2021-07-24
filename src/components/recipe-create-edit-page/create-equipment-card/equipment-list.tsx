import React from 'react';
import type { ReactElement } from 'react';
import type { IEquipment } from '../../../models-and-constants/IRecipe';
import { EditableEquipment } from './editable-equipment';

type Props = {
  currentEquipments: IEquipment[];
  onEquipmentChange: (equipment: IEquipment) => void;
  onEquipmentRemove: (id: string) => void;
  onEquipmentAdd: () => void;
  equipmentErrorReset: boolean;
};

export function EquipmentList({
  currentEquipments,
  onEquipmentChange,
  onEquipmentRemove,
  onEquipmentAdd,
  equipmentErrorReset,
}: Props): ReactElement {
  const allEquipments = currentEquipments.map((i, index) => {
    return (
      <EditableEquipment
        key={i.equipmentId}
        currentEquipment={i}
        allEquipments={currentEquipments}
        onEquipmentChange={onEquipmentChange}
        onMinusButtonClick={onEquipmentRemove}
        onPlusButtonClick={onEquipmentAdd}
        equipmentErrorReset={equipmentErrorReset}
      />
    );
  });

  return <>{allEquipments}</>;
}

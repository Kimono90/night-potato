import React from 'react';
import type { ReactElement } from 'react';
import type { IEquipment } from '../../../../models-and-constants/IRecipe';
import { EditableEquipment } from './editable-equipment';

type Props = {
  currentEquipments: IEquipment[];
  onEquipmentChange: (equipment: IEquipment) => void;
  onEquipmentRemove: (id: string) => void;
  onEquipmentAdd: () => void;
};

export function EquipmentList({
  currentEquipments,
  onEquipmentChange,
  onEquipmentRemove,
  onEquipmentAdd,
}: Props): ReactElement {
  const allEquipments = currentEquipments.map((i, index) => (
    <EditableEquipment
      key={i.id}
      currentEquipment={i}
      allEquipments={currentEquipments}
      onEquipmentChange={onEquipmentChange}
      onMinusButtonClick={onEquipmentRemove}
      onPlusButtonClick={onEquipmentAdd}
    />
  ));

  return <>{allEquipments}</>;
}

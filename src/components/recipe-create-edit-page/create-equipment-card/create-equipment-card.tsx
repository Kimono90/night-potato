import React, { ReactElement, useState } from 'react';
import type { IEquipment } from '../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../template-components/create-items-card/create-items-card';
import { generate } from 'shortid';
import { EquipmentList } from './equipment-list';

type Props = {
  equipment: IEquipment[];
  onEquipmentChange: (equipment: IEquipment[]) => void;
  equipmentErrorReset: boolean;
};

export function CreateEquipmentCard({ equipment, onEquipmentChange, equipmentErrorReset }: Props): ReactElement {
  const handleRemoveEquipment = (equipmentId: string) => {
    const newEquipment = equipment.filter((i: IEquipment) => i.equipmentId !== equipmentId);
    onEquipmentChange(newEquipment);
  };

  const handleChangeEquipment = (changedEquipment: IEquipment) => {
    const changedEquipmentIndex = equipment.findIndex((i) => i.equipmentId === changedEquipment.equipmentId);
    const equipmentCopy = [...equipment];
    equipmentCopy[changedEquipmentIndex] = changedEquipment;
    onEquipmentChange(equipmentCopy);
  };

  const handleAddEquipment = () => {
    onEquipmentChange([...equipment, { equipmentId: generate(), name: '' }]);
  };

  return (
    <CreateItemsCard
      cardTitle="Equipment"
      itemsToRender={
        <EquipmentList
          currentEquipments={equipment}
          onEquipmentRemove={handleRemoveEquipment}
          onEquipmentChange={handleChangeEquipment}
          onEquipmentAdd={handleAddEquipment}
          equipmentErrorReset={equipmentErrorReset}
        />
      }
    />
  );
}

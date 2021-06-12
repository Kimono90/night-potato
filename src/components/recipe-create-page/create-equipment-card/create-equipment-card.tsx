import React, { ReactElement, useState } from 'react';
import type { IEquipment } from '../../../models-and-constants/IRecipe';
import { CreateItemsCard } from '../template-components/create-items-card/create-items-card';
import { generate } from 'shortid';
import { EquipmentList } from './equipment-list';

export function CreateEquipmentCard(): ReactElement {
  const [equipment, setEquipment] = useState<IEquipment[]>([{ id: generate(), name: '' }]);

  const handleRemoveEquipment = (equipmentId: string) => {
    const newEquipment = equipment.filter((i: IEquipment) => i.id !== equipmentId);
    setEquipment(newEquipment);
  };

  const handleChangeEquipment = (changedEquipment: IEquipment) => {
    const changedEquipmentIndex = equipment.findIndex((i) => i.id === changedEquipment.id);
    const equipmentCopy = [...equipment];
    equipmentCopy[changedEquipmentIndex] = changedEquipment;
    setEquipment(equipmentCopy);
  };

  const handleAddEquipment = () => {
    setEquipment([...equipment, { id: generate(), name: '' }]);
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
        />
      }
    />
  );
}

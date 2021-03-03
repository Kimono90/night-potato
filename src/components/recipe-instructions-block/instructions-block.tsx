import React from 'react';
import type { IInstructionStep } from '../../models-and-constants/IRecipe';

type Props = {
  instructions: IInstructionStep[]
}

export default function InstructionsBlock({instructions}: Props) {

  return (
    <div>INSTRUCTIONS</div>
  )
}
import React from 'react';
import type { IInstructionStep } from '../../models-and-constants/IRecipe';
import { StyledList, StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';
import { Instruction } from './instruction';

type Props = {
  instructions: IInstructionStep[];
  onInstructionChange: (newInstructions: IInstructionStep[]) => void;
};

export default function InstructionsBlock({ instructions, onInstructionChange }: Props) {
  const toggleChecked = (instructionStep: IInstructionStep) => {
    const inst = [...instructions];
    const toUpdate = inst.find((i) => i.stepNr === instructionStep.stepNr);
    if (toUpdate) toUpdate.isChecked = !instructionStep.isChecked;
    onInstructionChange(inst);
  };

  const sortedInstructions = instructions.sort((a, b) => a.stepNr - b.stepNr);

  const instructionList = sortedInstructions.map((i) => (
    <Instruction key={i.stepNr} instruction={i} toggleChecked={toggleChecked} />
  ));

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Instructions</StyledTitle>
      <StyledList data-label="instruction-list">{instructionList}</StyledList>
    </StyledSummaryCard>
  );
}

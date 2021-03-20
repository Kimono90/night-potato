import React from 'react';
import type { IInstructionStep } from '../../models-and-constants/IRecipe';
import { StyledList, StyledSummaryCard, StyledTitle } from '../shared-styles/shared-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { StyledInstruction } from './instructions-block.styles';

type Props = {
  instructions: IInstructionStep[];
  onInstructionChange: (newInstructions: IInstructionStep[]) => void;
}

export default function InstructionsBlock({instructions, onInstructionChange}: Props) {
  const toggleChecked = (instructionStep: IInstructionStep) => {
    const inst = [...instructions];

    const toUpdate = inst.find((i) => i.stepNr === instructionStep.stepNr);
    if (toUpdate) toUpdate.isChecked = !instructionStep.isChecked

    onInstructionChange(inst);
  }

  const sortedInstructions = instructions.sort((a, b) => a.stepNr - b.stepNr);
  const instructionList = sortedInstructions.map((i) =>
    <StyledInstruction data-label="instruction" key={i.stepNr} onClick={() => toggleChecked(i)}>
    <FontAwesomeIcon icon={i.isChecked ? faCheckSquare : faSquare} />
    <p>
      <span style={{textDecoration: i.isChecked ? 'line-through': 'none'}}>{i.stepNr}. {i.stepDescription}</span>
    </p>
  </StyledInstruction>)

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Instructions</StyledTitle>
      <StyledList data-label="instruction-list">
        {instructionList}
      </StyledList>
    </StyledSummaryCard>
  )
}

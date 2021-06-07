import React from 'react';
import type { IInstructionStep } from '../../../models-and-constants/IRecipe';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { Instruction } from './instruction';

type Props = {
  instructions: IInstructionStep[];
};

export default function InstructionsBlock({ instructions }: Props) {
  const sortedInstructions = instructions.sort((a, b) => a.stepNr - b.stepNr);

  const instructionList = sortedInstructions.map((i) => <Instruction key={i.stepNr} instruction={i} />);

  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Instructions</StyledTitle>
      <StyledBody data-label="instruction-list">{instructionList}</StyledBody>
    </StyledSummaryCard>
  );
}

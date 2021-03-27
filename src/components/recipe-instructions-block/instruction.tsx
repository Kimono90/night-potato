import React from 'react';
import type { IInstructionStep } from '../../models-and-constants/IRecipe';
import { StyledInstruction } from './instructions-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  instruction: IInstructionStep;
  toggleChecked: (instruction: IInstructionStep) => void;
};

export function Instruction({ instruction, toggleChecked }: Props) {
  return (
    <StyledInstruction data-label="instruction" key={instruction.stepNr} onClick={() => toggleChecked(instruction)}>
      <FontAwesomeIcon icon={instruction.isChecked ? faCheckSquare : faSquare} />
      <p>
        <span style={{ textDecoration: instruction.isChecked ? 'line-through' : 'none' }}>
          {instruction.stepNr}. {instruction.stepDescription}
        </span>
      </p>
    </StyledInstruction>
  );
}

import React, { useState } from 'react';
import type { IInstructionStep } from '../../../models-and-constants/IRecipe';
import { StyledInstruction } from './instructions-block.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  instruction: IInstructionStep;
};

export function Instruction({ instruction }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>();

  return (
    <StyledInstruction data-label="instruction" onClick={() => setIsChecked(!isChecked)}>
      <FontAwesomeIcon icon={isChecked ? faCheckSquare : faSquare} />
      <p>
        <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
          {instruction.stepNr}. {instruction.stepDescription}
        </span>
      </p>
    </StyledInstruction>
  );
}

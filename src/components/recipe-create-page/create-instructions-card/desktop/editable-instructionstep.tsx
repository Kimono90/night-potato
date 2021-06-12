import React, { ReactElement, useEffect, useState } from 'react';
import { StyledCreateInstructionStep, StyledInstructionField } from '../create-instructions-card.styles';

type Props = {
  currentInstructionStep: string;
  onInstructionChange: (instructionStep: string) => void;
};

export function EditableInstructionStep({ currentInstructionStep, onInstructionChange }: Props): ReactElement {
  const [instructionStep, setInstructionStep] = useState<string>(currentInstructionStep);
  const [instructionHasError, setInstructionHasError] = useState<boolean>(false);
  const [instructionTouched, setInstructionTouched] = useState<boolean>(false);

  useEffect(() => {
    if (instructionStep) {
      onInstructionChange(instructionStep);
    } else {
      setInstructionHasError(!instructionStep);
    }
  }, [instructionStep]);

  return (
    <StyledCreateInstructionStep>
      <StyledInstructionField
        placeholder="Write your recipe instructions here"
        value={instructionStep}
        onChange={(event) => {
          setInstructionHasError(false);
          setInstructionStep(event.target.value);
        }}
        onBlur={() => setInstructionTouched(true)}
        hasError={`${instructionHasError && instructionTouched}`}
      />
    </StyledCreateInstructionStep>
  );
}

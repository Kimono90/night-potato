import React, { ReactElement, useState } from 'react';
import { EditableInstructionStep } from './editable-instructionstep';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../../shared-styles/shared-styles';

export function CreateInstructionsCard(): ReactElement {
  const [instructions, setInstructions] = useState<string>('');

  return (
    <StyledSummaryCard>
      <StyledTitle>Instructions</StyledTitle>
      <StyledBody>
        <EditableInstructionStep
          currentInstructionStep={instructions}
          onInstructionChange={(i) => setInstructions(i)}
        />
      </StyledBody>
    </StyledSummaryCard>
  );
}

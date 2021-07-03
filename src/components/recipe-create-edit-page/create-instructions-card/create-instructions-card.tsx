import React, { ReactElement } from 'react';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { StyledInstructionField } from './create-instructions-card.styles';

type Props = {
  instructions: string;
  onInstructionsChange: (instructions: string) => void;
  instructionsHaveError: boolean;
};

export function CreateInstructionsCard({ instructions, onInstructionsChange, instructionsHaveError }: Props): ReactElement {
  return (
    <StyledSummaryCard>
      <StyledTitle>Instructions</StyledTitle>
      <StyledBody>
        <StyledInstructionField
          placeholder="Write your recipe instructions here"
          value={instructions}
          onChange={(event) => {
            onInstructionsChange(event.target.value);
          }}
          hasError={`${!instructions && instructionsHaveError}`}
        />
      </StyledBody>
    </StyledSummaryCard>
  );
}

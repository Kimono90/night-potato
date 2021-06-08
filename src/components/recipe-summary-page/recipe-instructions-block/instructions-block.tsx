import React from 'react';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { StyledInstruction } from './instructions-block.styles';

type Props = {
  instructions: string;
};

export default function InstructionsBlock({ instructions }: Props) {
  return (
    <StyledSummaryCard data-label="summary-card">
      <StyledTitle data-label="title">Instructions</StyledTitle>
      <StyledBody data-label="instruction-list">
        <StyledInstruction>{instructions}</StyledInstruction>
      </StyledBody>
    </StyledSummaryCard>
  );
}

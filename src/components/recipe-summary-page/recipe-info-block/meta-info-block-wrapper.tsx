import { StyledInfoBlock, StyledMetaInfoContentArea } from './meta-info-block.styles';
import { StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import React from 'react';
import type { ReactElement } from 'react';

type Props = {
  recipeName: string;
  children: ReactElement[];
};

export function MetaInfoBlockWrapper({ children, recipeName }: Props) {
  return (
    <StyledInfoBlock data-testid="meta-info-block">
      <StyledSummaryCard data-label="summary-card">
        <StyledTitle data-testid="recipe-title">{recipeName}</StyledTitle>
        <StyledMetaInfoContentArea data-label="meta-info-content">{children}</StyledMetaInfoContentArea>
      </StyledSummaryCard>
    </StyledInfoBlock>
  );
}

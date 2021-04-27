import React from 'react';
import { StyledInfoBlock, StyledMetaInfoContentArea } from './meta-info-block.styles';
import { StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';

type Props = {
  recipeName: string;
  children: React.ReactElement[];
};

export function MetaInfoBlockWrapper({ children, recipeName }: Props) {
  return (
    <StyledInfoBlock data-label="info-block">
      <StyledSummaryCard data-label="summary-card">
        <StyledTitle data-label="recipe-title">{recipeName}</StyledTitle>
        <StyledMetaInfoContentArea data-label="meta-info-content">{children}</StyledMetaInfoContentArea>
      </StyledSummaryCard>
    </StyledInfoBlock>
  );
}

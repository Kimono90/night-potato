import React from 'react';
import type { ReactElement } from 'react';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../../shared-styles/shared-styles';

type Props = {
  cardTitle: string;
  itemsToRender: JSX.Element[] | JSX.Element;
  mobileInputModal?: ReactElement;
};

export function CreateItemsCard({ cardTitle, itemsToRender, mobileInputModal }: Props): ReactElement {
  return (
    <>
      <StyledSummaryCard data-label="summary-card">
        <StyledTitle data-label="title">{cardTitle}</StyledTitle>
        <StyledBody>{itemsToRender}</StyledBody>
      </StyledSummaryCard>
      {mobileInputModal ?? null}
    </>
  );
}

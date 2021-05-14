import { StyledMetaInfoIcon, StyledMetaInfoItem } from './meta-info-block.styles';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import type { ReactElement } from 'react';

type Props = {
  label: string;
  faIcon: IconDefinition;
  iconText: string;
};

export function MetaInfoItem({ label, faIcon, iconText }: Props): ReactElement {
  return (
    <StyledMetaInfoItem>
      <StyledMetaInfoIcon icon={faIcon} />
      <span data-testid={label}>{iconText}</span>
    </StyledMetaInfoItem>
  );
}

import React from 'react';
import { StyledMetaInfoIcon, StyledMetaInfoItem } from './meta-info-block.styles';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  faIcon: IconDefinition;
  iconText: string;
};

export function MetaInfoItem({ faIcon, iconText }: Props): React.ReactElement {
  return (
    <StyledMetaInfoItem data-label="meta-info-object">
      <StyledMetaInfoIcon data-label="meta-info-icon" icon={faIcon} />
      {iconText}
    </StyledMetaInfoItem>
  );
}

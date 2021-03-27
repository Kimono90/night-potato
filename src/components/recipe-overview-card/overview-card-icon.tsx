import React from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  faIcon: IconDefinition;
  iconText: string;
}

export function OverviewCardIcon({faIcon, iconText}: Props): React.ReactElement {

  return <div><FontAwesomeIcon icon={faIcon} /> {iconText}</div>
}
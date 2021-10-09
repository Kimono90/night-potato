import React from 'react';
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { StyledMobileModal } from '../../../shared-styles/shared-styles';

type Props = {
  showModal: boolean;
  modalTitle: string;
  onCheckButtonClick: () => void;
  onBackClick: () => void;
  children: ReactElement[] | ReactElement;
  isAcceptLoading?: boolean;
  loadingText?: string;
};

export function MobileModalWrapper({
  showModal,
  modalTitle,
  onCheckButtonClick,
  onBackClick,
  children,
  isAcceptLoading,
  loadingText,
}: Props): ReactElement {
  return (
    <StyledMobileModal show={`${showModal}`}>
      <h2 style={{ alignSelf: 'center' }}>{modalTitle}</h2>
      {children}
      <div
        style={{
          display: 'flex',
          fontSize: '2rem',
          width: '100%',
          justifyContent: isAcceptLoading ? 'center' : 'space-between',
          padding: '1rem 2rem 0 2rem',
          boxSizing: 'border-box',
        }}
      >
        {!isAcceptLoading ? (
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: 'dodgerblue' }}
            onClick={() => {
              onBackClick();
            }}
          />
        ) : null}
        {isAcceptLoading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '1.5rem', marginRight: '1rem' }}>{loadingText}</p>
            <FontAwesomeIcon icon={faSpinner} pulse={true} />
          </div>
        ) : (
          <FontAwesomeIcon icon={faCheck} style={{ color: 'limegreen' }} onClick={() => onCheckButtonClick()} />
        )}
      </div>
    </StyledMobileModal>
  );
}

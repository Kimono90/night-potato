import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledAddItemModal } from './add-item-modal-wrapper.styles';

type Props = {
  showModal: boolean;
  modalTitle: string;
  onCheckButtonClick: () => void;
  onBackClick: () => void;
  children: React.ReactElement[];
};

export function AddItemModalWrapper({
  showModal,
  modalTitle,
  onCheckButtonClick,
  onBackClick,
  children,
}: Props): ReactElement {
  return (
    <StyledAddItemModal show={`${showModal}`}>
      <h2 style={{ alignSelf: 'center' }}>{modalTitle}</h2>
      {children}
      <div
        style={{
          display: 'flex',
          fontSize: '2rem',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: '6rem',
        }}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: 'dodgerblue' }}
          onClick={() => {
            onBackClick();
          }}
        />
        <FontAwesomeIcon icon={faCheck} style={{ color: 'limegreen' }} onClick={() => onCheckButtonClick()} />
      </div>
    </StyledAddItemModal>
  );
}

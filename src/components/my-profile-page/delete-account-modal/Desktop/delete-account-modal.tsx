import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { StyledActionButtonSmall } from '../../../shared-styles/shared-styles';
import { colors } from '../../../../styles/potato-styles';
import { createPortal } from 'react-dom';

type ModalProps = {
  closeModal: () => void;
  onDeleteButtonClick: () => void;
  isDeleting: boolean;
};

export function DeleteAccountModal({ closeModal, onDeleteButtonClick, isDeleting }: ModalProps): ReactElement {
  return createPortal(
    <>
      <StyledBackDrop onClick={() => closeModal()} />
      <StyledDesktopModal>
        <div>
          Sad to see you go! Just so you know, when proceeding:
          <ul>
            <li>Your user will be removed from our user list.</li>
            <li>The recipes created with your account will be deleted.</li>
            <li>A Google popup might appear to request a recent login session.</li>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '0.5rem' }}>
          <StyledActionButtonSmall
            onClick={() => closeModal()}
            backgroundColor={colors.info}
            textColor={colors.white}
            hoverColor={colors.infoHover}
          >
            Go back
          </StyledActionButtonSmall>
          <StyledActionButtonSmall
            onClick={onDeleteButtonClick}
            backgroundColor={colors.danger}
            textColor={colors.white}
            hoverColor={colors.dangerHover}
          >
            {isDeleting ? 'Deleting' : 'Delete my account'}
          </StyledActionButtonSmall>
        </div>
      </StyledDesktopModal>
    </>,
    document.body,
  );
}

const StyledBackDrop = styled.div`
  top: 0;
  left: 0;
  background-color: black;
  opacity: 40%;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledDesktopModal = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  border-radius: 5px;
  position: absolute;
  background-color: #c9a495;
`;

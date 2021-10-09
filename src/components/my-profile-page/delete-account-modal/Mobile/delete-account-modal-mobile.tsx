import React, { ReactElement } from 'react';
import { MobileModalWrapper } from '../../../recipe-create-edit-page/template-components/add-item-modal-mobile/mobile-modal-wrapper';

type ModalProps = {
  closeModal: () => void;
  onDeleteButtonClick: () => void;
  isDeleting: boolean;
};

export function DeleteAccountModalMobile({ closeModal, onDeleteButtonClick, isDeleting }: ModalProps): ReactElement {
  return (
    <MobileModalWrapper
      showModal={true}
      modalTitle="Delete your account"
      onBackClick={closeModal}
      onCheckButtonClick={onDeleteButtonClick}
      isAcceptLoading={isDeleting}
      loadingText="Deleting account"
    >
      <div style={{ textAlign: 'start', width: '95%', margin: '0 auto' }}>
        <p style={{ marginLeft: '1.5rem' }}>Sad to see you go! Just so you know, when proceeding:</p>
        <ul>
          <li>Your user will be removed from our user list.</li>
          <li>The recipes created with your account will be deleted.</li>
          <li>A Google popup might appear to request a recent login session.</li>
        </ul>
      </div>
    </MobileModalWrapper>
  );
}

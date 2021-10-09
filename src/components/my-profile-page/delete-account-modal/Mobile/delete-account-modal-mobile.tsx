import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { MobileModalWrapper } from '../../../recipe-create-edit-page/template-components/add-item-modal-mobile/mobile-modal-wrapper';
import { FirebaseContext } from '../../../../contexts/firebase-auth-context';
import { useHistory } from 'react-router-dom';
import { deleteAllRecipes } from '../../../../gateways/night-potato-api-gateway';

type ModalProps = {
  closeModal: () => void;
};

export function DeleteAccountModalMobile({ closeModal }: ModalProps): ReactElement {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { user, deleteAccount, getAuthToken } = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => console.log(isDeleting));

  async function handleDeleteAccount() {
    setIsDeleting(true);
    if (user) {
      const authToken = await getAuthToken();
      await deleteAllRecipes(authToken, user.uid);
      await deleteAccount();
      setIsDeleting(false);
      history.push('/');
    }
    setIsDeleting(false);
  }

  return (
    <MobileModalWrapper
      showModal={true}
      modalTitle="Delete your account"
      onBackClick={closeModal}
      onCheckButtonClick={handleDeleteAccount}
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

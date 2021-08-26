import React, { ReactElement, useContext, useEffect, useState } from 'react';
import {
  StyledActionButton,
  StyledBody,
  StyledCardItem,
  StyledPage,
  StyledSummaryCard,
  StyledTitle,
} from '../../components/shared-styles/shared-styles';
import { FirebaseContext } from '../../contexts/firebase-auth-context';
import { LoadingPage } from '../loading-page/loading-page';
import { colors } from '../../styles/potato-styles';
import { DeleteAccountModal } from '../../components/my-profile-page/delete-account-modal/delete-account-modal';

export function MyProfilePage(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { user } = useContext(FirebaseContext);

  return !user ? (
    <LoadingPage />
  ) : (
    <StyledPage>
      <StyledSummaryCard style={{ marginTop: '3rem' }}>
        <StyledTitle>You are signed in as</StyledTitle>
        <StyledBody>
          <StyledCardItem>
            <div>Name</div>
            <div>{user.displayName}</div>
          </StyledCardItem>
          <StyledCardItem>
            <div>E-mail</div>
            <div>{user.email}</div>
          </StyledCardItem>
          <StyledCardItem>
            <span
              style={{
                fontSize: '1rem',
                lineHeight: '1.25rem',
                borderTop: `3px solid ${colors.primary}`,
                padding: '0.5rem',
              }}
            >
              Your user data directly comes from your Google account. This also means that your e-mail address and name is
              not stored in any night potato database.
            </span>
          </StyledCardItem>
        </StyledBody>
      </StyledSummaryCard>
      <StyledActionButton
        backgroundColor={colors.danger}
        textColor={colors.white}
        hoverColor={colors.dangerHover}
        onClick={async () => {
          setShowModal(true);
        }}
      >
        <span>Delete my account &#128465;&#65039;</span>
      </StyledActionButton>
      {showModal ? <DeleteAccountModal closeModal={() => setShowModal(false)} /> : null}
    </StyledPage>
  );
}

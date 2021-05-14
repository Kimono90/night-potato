import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecipeSummaryPage from './recipe-summary-page';
import React from 'react';
import { FirebaseContext, IFirebaseContext } from '../../contexts/firebase-auth-context';

describe('RecipeSummaryPage', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      recipeId: 1,
    })
  }))

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      recipeId: 1,
    })
  }))

  jest.createMockFromModule('../../contexts/firebase-auth-context')

  it('displays the correct portions after clicking the minus button', () => {
    // Arrange
    render(
      // <FirebaseContext.Provider
      // value={{user: null, logIn: jest.fn(), logOut: jest.fn(), isLoggingIn: true }}>
      <RecipeSummaryPage />
    // </FirebaseContext.Provider>
  )

    // Act
    userEvent.click(screen.getByTestId('minus-portions'))

    // Assert
    expect(screen.getByTestId('portions').textContent).toBe('3 portions')
  })
})

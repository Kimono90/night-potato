import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import RecipeSummaryPage from './recipe-summary-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: (): { recipeId: string } => ({
    recipeId: '1'
  }),
}));

describe('RecipeSummaryPage', () => {
  it('loads', () => {
    render(<RecipeSummaryPage />);

    expect(screen.getByTestId( 'summary-page')).toBeInTheDocument();
  });
  it('shows all blocks', () => {
    render(<RecipeSummaryPage />);

    expect(screen.getByTestId( 'meta-info-block')).toBeInTheDocument();
    expect(screen.getByTestId( 'instructions-block')).toBeInTheDocument();
    expect(screen.getByTestId( 'ingredients-block')).toBeInTheDocument();
    expect(screen.getByTestId( 'photo-carousel')).toBeInTheDocument();
  });
});

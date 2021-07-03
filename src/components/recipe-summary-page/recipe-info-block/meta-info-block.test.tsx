import { render, screen } from '@testing-library/react';
import MetaInfoBlock, { Props } from './meta-info-block';
import { recipeLabels } from '../../recipe-label/label-constants';
import { testImg1, testImg2, testImg3 } from '../../../testImgs';

describe('MetaInfoBlock', () => {
  const defaultProps: Props = {
    recipeMetaInfo: {
      name: 'Pizza Margharita',
      kcalPerPortion: 800,
      portions: 4,
      prepTimeInMinutes: 120,
      labels: [recipeLabels.vegan, recipeLabels.vegetarian],
      imgUrls: [],
    },
    onChangePortions: jest.fn(),
  };

  it('displays the correct info', () => {
    // Arrange
    render(<MetaInfoBlock {...defaultProps} />);

    // Assert
    expect(screen.getByTestId('recipe-title').textContent).toBe('Pizza Margharita');
    expect(screen.getByTestId('kcal').textContent).toBe('800 kcal');
    expect(screen.getByTestId('portions').textContent).toBe('4 portions');
    expect(screen.getByTestId('prep-time').textContent).toBe('120 minutes');
    expect(screen.getByTestId('labels').firstChild?.textContent).toContain('Vegan');
    expect(screen.getByTestId('labels').lastChild?.textContent).toContain('Vegetarian');
    expect(screen.getByTestId('labels').lastChild?.textContent).toContain('Vegetarian');
  });
});

import styled from '@emotion/styled';
import { colors } from '../../styles/potato-styles';

type LabelProps = {
  backgroundColor: string;
  isActive: string;
  clickAble: string;
};

export const StyledRecipeLabel = styled.div<LabelProps>`
  background-color: ${(props) => (props.isActive === 'false' ? `${colors.subtleGrey}` : (props) => props.backgroundColor)};
  border-radius: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  display: flex;
  width: 6rem;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.clickAble === 'true' ? 'pointer' : 'auto')};
  margin: 0.5rem 0;

  @media (min-width: 500px) {
    width: 8rem;
  }
`;

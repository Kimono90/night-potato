import styled from '@emotion/styled';
import { colors } from '../../../styles/potato-styles';

export const StyledSaveButton = styled.button`
  text-decoration: none;
  background-color: ${colors.success};
  border: none;
  border-radius: 0.5rem;
  color: ${colors.white};
  padding: 0.25rem 1rem;
  font-size: 2rem;
  font-family: inherit;
  cursor: pointer;
  margin-bottom: 2rem;

  :hover {
    background-color: ${colors.successHover};
  }
`;

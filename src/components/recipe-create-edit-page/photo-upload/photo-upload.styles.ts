import styled from '@emotion/styled';
import { colors } from '../../../styles/potato-styles';

export const StyledUploadField = styled.label`
  font-family: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: ${colors.primary};
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  align-self: center;

  :hover {
    background-color: ${colors.primaryActive};
  }
`;

export const StyledPreviewImg = styled.img`
  align-self: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

export const FileSizeErrorMessage = styled.div`
  font-size: 1rem;
  align-self: center;
  margin: 0 1.5rem 1.5rem 1.5rem;

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }

  p {
    margin: 0;
  }
`;

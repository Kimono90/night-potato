import styled from '@emotion/styled';

type LabelProps = {
  backgroundColor: string;
};

export const StyledRecipeLabel = styled.div<LabelProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    width: 8rem;
  }
`;

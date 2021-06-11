import styled from '@emotion/styled';

type LabelProps = {
  backgroundColor: string;
  isActive: string;
  clickAble: string;
};

export const StyledRecipeLabel = styled.div<LabelProps>`
  background-color: ${(props) => (props.isActive === 'false' ? 'grey' : (props) => props.backgroundColor)};
  border-radius: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.clickAble === 'true' ? 'pointer' : 'auto')};

  @media (min-width: 500px) {
    width: 8rem;
  }
`;

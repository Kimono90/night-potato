import styled from '@emotion/styled';

type FieldProps = {
  hasError?: string;
};

export const StyledCreateInstructionStep = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const StyledInstructionField = styled.textarea<FieldProps>`
  font-family: inherit;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  width: 100%;
  margin: 0.5rem;
  border-color: ${(props) => (props.hasError === 'true' ? 'red' : 'none')};
`;

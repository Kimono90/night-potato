import styled from '@emotion/styled';

type IngredientModalProps = {
  show: string;
};

export const StyledAddItemModal = styled.div<IngredientModalProps>`
  display: ${(props) => (props.show === 'true' ? 'flex' : 'none')};
  background-color: #c9a495;
  height: 100%;
  width: 100%;
  position: fixed;
  flex-direction: column;
  align-items: flex-start;
`;

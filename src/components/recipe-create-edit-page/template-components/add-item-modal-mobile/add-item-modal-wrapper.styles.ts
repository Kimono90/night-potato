import styled from '@emotion/styled';
import { colors } from '../../../../styles/potato-styles';

type IngredientModalProps = {
  show: string;
};

export const StyledAddItemModal = styled.div<IngredientModalProps>`
  display: ${(props) => (props.show === 'true' ? 'flex' : 'none')};
  background-color: ${colors.secondary};
  height: 100%;
  width: 100%;
  position: fixed;
  flex-direction: column;
  align-items: flex-start;
`;

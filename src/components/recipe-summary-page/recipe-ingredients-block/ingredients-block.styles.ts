import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../../styles/potato-styles';

export const StyledIngredient = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  align-items: start;
  margin: 0.5rem;
  flex-wrap: nowrap;
  cursor: pointer;
  text-decoration: none;

  svg {
    cursor: pointer;
    margin-left: 1rem;
    margin-top: 0.35rem;
  }

  p {
    text-align: start;
    margin: 0 1rem;
  }

  #amount {
    display: inline-block;

    @media (min-width: 500px) {
      width: 8rem;
    }
  }
`;

export const StyledEquipment = styled.div`
  display: flex;
  width: 95%;
  justify-content: flex-start;
  align-items: start;
  margin: 0.5rem 1.5rem;
  flex-wrap: nowrap;
  text-decoration: none;

  svg {
    margin-top: 0.35rem;
  }
`;

type TabProps = {
  visible?: boolean;
};

export const StyledTabList = styled.div<TabProps>`
  border-radius: 0.5rem;
  background-color: ${colors.secondary};
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  text-decoration: none;
  position: relative;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const StyledTabTitle = styled.div<TabProps>`
  width: 50%;
  align-self: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${(props) => (props.visible ? `${colors.primaryActive}` : `${colors.primary}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  @media (min-width: 500px) {
    font-size: 2rem;
  }

  :hover {
    cursor: pointer;
  }
`;

type CopyProps = {
  copied: string;
};

export const StyledCopyButton = styled(FontAwesomeIcon)<CopyProps>`
  font-size: 1.5rem;
  align-self: center;
  padding: 0 0.5rem;
  display: ${(props) => (props.copied === 'true' ? 'none' : 'block')};

  :hover {
    color: ${colors.info};
  }
`;

export const StyledCopiedConfirmation = styled.span<CopyProps>`
  padding: 0 0.5rem;
  display: ${(props) => (props.copied === 'true' ? 'block' : 'none')};
`;

import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 95%;
`;

export const StyledMetaInfoContentArea = styled.div`
  border-radius: 0.5rem;
  background-color: #c9a495;
  display: flex;
  text-align: start;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  & div {
    & svg {
      min-width: 2rem;
    }
  }

  @media (min-width: 500px) {
    height: 6rem;
    font-size: 1.5rem;
  }
`;

export const StyledMetaInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem 0;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    min-width: 6rem;
  }
`;

export const StyledMetaInfoIcon = styled(FontAwesomeIcon)`
  display: flex;
  margin: 0;
  text-decoration: none;
  cursor: ${(props) => (props.icon === faPlusCircle || faMinusCircle ? 'pointer' : 'default')};
  font-size: 1rem;
`;

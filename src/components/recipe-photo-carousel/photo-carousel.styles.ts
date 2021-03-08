import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const StyledPhotoCarousel = styled.div`
  display: flex;
  align-items: center;
`

export const StyledCarouselPhoto = styled.div`
  width: 12rem;
  height: 12rem;
  background-size: cover;
  border-radius: 0.5rem;
  margin: 0 1rem 2rem 1rem;
  padding: 0 2rem;
  
  @media(min-width: 500px) {
    margin: 0 2rem 4rem 2rem;    
    width: 20rem;
    height: 20rem;
  }
 `

export const StyledArrowIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;

  :active {
    transform: scale(1.3);
  }

  @media(min-width: 500px) {
    transition: transform 0.3s ease-in-out;

    :hover {
      cursor: pointer;
      transform: ${props => props.icon === faChevronLeft ? 'translateX(-4px)' : 'translateX(4px)'};
    }
  }
`

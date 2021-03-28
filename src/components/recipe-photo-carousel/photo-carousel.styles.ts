import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/react';

export const StyledPhotoCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type CarouselPhotoProps = {
  imgUrl: string;
};

export const fadeIn = keyframes`
  from, 0%, to {
  opacity: 0;
  }
  
 100% {
  opacity: 1;
 }
`;

export const StyledCarouselPhoto = styled.div<CarouselPhotoProps>`
  width: 12rem;
  height: 12rem;
  background-size: cover;
  border-radius: 0.5rem;
  margin: 0 1rem 1.5rem 1rem;
  padding: 0 2rem;
  background-image: ${(props) => props.imgUrl};
  animation: fade-in 0.3s ease-in-out;
  animation-fill-mode: backwards;
  user-select: none;

  @media (min-width: 500px) {
    margin: 0 2rem 1.5rem 2rem;
    width: 20rem;
    height: 20rem;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const StyledArrowIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

  :active {
    transform: scale(1.3);
  }

  @media (min-width: 500px) {
    transition: transform 0.3s ease-in-out;

    :hover {
      cursor: pointer;
      transform: ${(props) => (props.icon === faChevronLeft ? 'translateX(-4px)' : 'translateX(4px)')};
    }
  }
`;

type DotProps = {
  active: boolean;
};

export const StyledDot = styled.div<DotProps>`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 1rem 2rem 1rem;
  background-color: ${(props) => (props.active ? 'white' : 'grey')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;

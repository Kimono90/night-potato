import styled from '@emotion/styled';

export const StyledPhotoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type CarouselPhotoProps = {
  imgUrl: string;
};

export const StyledPhoto = styled.div<CarouselPhotoProps>`
  width: 12rem;
  height: 12rem;
  background-size: cover;
  border-radius: 0.5rem;
  margin: 0 1rem 2rem 1rem;
  padding: 0 2rem;
  background-image: ${(props) => props.imgUrl};
  user-select: none;

  @media (min-width: 500px) {
    margin: 0 2rem 2rem 2rem;
    width: 20rem;
    height: 20rem;
  }
`;

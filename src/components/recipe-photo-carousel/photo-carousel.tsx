import React, { useState } from 'react';
import { StyledArrowIcon, StyledCarouselPhoto, StyledNextCarouselPhoto, StyledPhotoCarousel, StyledPreviousCarouselPhoto } from './photo-carousel.styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  imgUrls: string [];
}

export default function PhotoCarousel({imgUrls}: Props) {
  const [selectedImgindex, setSelectedImgIndex] = useState<number>(0);
  const previousImgUrl: string = selectedImgindex - 1 < 0 ? '' : `url(${imgUrls[selectedImgindex - 1]})`;
  const nextImgUrl: string = selectedImgindex + 1 > imgUrls.length ? '' : `url(${imgUrls[selectedImgindex + 1]})`;

  const handleNextImgClick = () => {
    if (selectedImgindex === imgUrls.length - 1) return;
    setSelectedImgIndex(selectedImgindex + 1)
  }

  const handlePreviousImgClick = () => {
    if (selectedImgindex === 0) return;
    setSelectedImgIndex(selectedImgindex - 1)
  }

  return (
    <StyledPhotoCarousel
      data-label="photo-carousel"
    >
      <StyledArrowIcon
        data-label="fa-left"
        icon={faChevronLeft}
        onClick={handlePreviousImgClick}
      />
        <StyledPreviousCarouselPhoto
          data-label="previous-carousel-photo"
          style={{ backgroundImage: previousImgUrl }}
        />
      <StyledCarouselPhoto
        data-label="carousel-photo"
        style={{ backgroundImage: `url(${imgUrls[selectedImgindex]})` }}
      />
        <StyledNextCarouselPhoto
          data-label="previous-carousel-photo"
          style={{ backgroundImage: nextImgUrl }}
        >
        </StyledNextCarouselPhoto>
        <StyledArrowIcon
          data-label="fa-right"
          icon={faChevronRight}
          onClick={handleNextImgClick}
        />
    </StyledPhotoCarousel>
)
}

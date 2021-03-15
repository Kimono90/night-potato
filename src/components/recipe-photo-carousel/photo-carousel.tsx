import React, { useState } from 'react';
import { StyledArrowIcon, StyledCarouselPhoto, StyledPhotoCarousel } from './photo-carousel.styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/react';

type Props = {
  imgUrls: string [];
}

export default function PhotoCarousel({imgUrls}: Props) {
  const [selectedImgindex, setSelectedImgIndex] = useState<number>(0);

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
        visibility={selectedImgindex > 0 ? 'visible' : 'hidden'}
      />
      <StyledCarouselPhoto
        id='photo'
        imgUrl={`url(${imgUrls[selectedImgindex]})`}
        data-label="carousel-photo"
      />
        <StyledArrowIcon
          data-label="fa-right"
          icon={faChevronRight}
          onClick={handleNextImgClick}
          visibility={selectedImgindex < imgUrls.length -1 ? 'visible' : 'hidden'}
        />
    </StyledPhotoCarousel>
)
}

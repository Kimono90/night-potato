import React, { useState } from 'react';
import { StyledArrowIcon, StyledCarouselPhoto, StyledPhotoCarousel } from './photo-carousel.styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  imgUrl: string;
}

export default function PhotoCarousel({imgUrl}: Props) {
  return (
    <StyledPhotoCarousel>
      <StyledArrowIcon data-label="FA-LEFT" icon={faChevronLeft} />
      <StyledCarouselPhoto
        data-label="carousel-photo"
        style={{ backgroundImage: `url(${imgUrl}` }}
      />
      <StyledArrowIcon data-label="FA-RIGHT" icon={faChevronRight} />
    </StyledPhotoCarousel>
)
}

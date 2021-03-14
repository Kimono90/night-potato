import React, { useState } from 'react';
import { StyledArrowIcon, StyledCarouselPhoto, StyledPhotoCarousel } from './photo-carousel.styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  imgUrls: string [];
}

export default function PhotoCarousel({imgUrls}: Props) {
  return (
    <StyledPhotoCarousel>
      <StyledArrowIcon data-label="fa-left" icon={faChevronLeft} />
      {imgUrls.map((imgUrl: string) => <StyledCarouselPhoto
        data-label="carousel-photo"
        style={{ backgroundImage: `url(${imgUrl})` }}

      />)}
      <StyledArrowIcon data-label="fa-right" icon={faChevronRight} />
    </StyledPhotoCarousel>
)
}

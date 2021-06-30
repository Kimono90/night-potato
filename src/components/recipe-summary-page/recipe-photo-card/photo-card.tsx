import React from 'react';
import { StyledPhoto, StyledPhotoCard } from './photo-card.styles';

type Props = {
  imgUrls: string[];
};

export default function PhotoCard({ imgUrls }: Props) {
  return (
    <StyledPhotoCard data-label="photo-carousel">
      <StyledPhoto id="photo" imgUrl={`url(${imgUrls[0]})`} data-label="carousel-photo" />
    </StyledPhotoCard>
  );
}

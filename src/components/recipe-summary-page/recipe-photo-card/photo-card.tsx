import React from 'react';
import { StyledPhoto, StyledPhotoCard } from './photo-card.styles';

type Props = {
  imgUrl: string;
};

export default function PhotoCard({ imgUrl }: Props) {
  return (
    <StyledPhotoCard data-label="photo-carousel">
      <StyledPhoto id="photo" imgUrl={`url(${imgUrl})`} data-label="carousel-photo" />
    </StyledPhotoCard>
  );
}

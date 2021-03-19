import React, { useState } from 'react';
import { fadeIn, StyledArrowIcon, StyledCarouselPhoto, StyledDot, StyledPhotoCarousel } from './photo-carousel.styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';

type Props = {
  imgUrls: string [];
}

export default function PhotoCarousel({imgUrls}: Props) {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);

  const handleNextImgClick = () => {
    return selectedImgIndex === imgUrls.length - 1
      ? setSelectedImgIndex(0)
      : setSelectedImgIndex(selectedImgIndex + 1)
  }

  const handlePreviousImgClick = () => {
    return selectedImgIndex === 0
      ? setSelectedImgIndex(imgUrls.length -1)
      : setSelectedImgIndex(selectedImgIndex - 1);
  }

  const renderDots = () => {
    return imgUrls.map((i, index) =>
      <StyledDot key={index} active={selectedImgIndex == index} onClick={() => setSelectedImgIndex(index)}/>)
  }

  return (
    <>
      <StyledPhotoCarousel data-label="photo-carousel">
        <StyledArrowIcon
          data-label="fa-left"
          icon={faChevronLeft}
          onClick={handlePreviousImgClick}
        />
        <StyledCarouselPhoto
          id='photo'
          imgUrl={`url(${imgUrls[selectedImgIndex]})`}
          data-label="carousel-photo"
        />
        <StyledArrowIcon
          data-label="fa-right"
          icon={faChevronRight}
          onClick={handleNextImgClick}
        />
      </StyledPhotoCarousel>
      <div style={{display: 'flex'}}>
        {renderDots()}
      </div>
    </>
)}

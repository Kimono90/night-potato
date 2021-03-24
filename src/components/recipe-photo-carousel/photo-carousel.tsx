import React, { useEffect, useState } from 'react';
import {
  StyledArrowIcon,
  StyledCarouselPhoto,
  StyledDot,
  StyledPhotoCarousel,
} from './photo-carousel.styles';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

type Props = {
  imgUrls: string[];
};

export default function PhotoCarousel({ imgUrls }: Props) {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextImgClick(),
    onSwipedRight: () => handlePreviousImgClick(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNextImgClick = () => {
    return selectedImgIndex === imgUrls.length - 1
      ? setSelectedImgIndex(0)
      : setSelectedImgIndex(selectedImgIndex + 1);
  };

  const handlePreviousImgClick = () => {
    return selectedImgIndex === 0
      ? setSelectedImgIndex(imgUrls.length - 1)
      : setSelectedImgIndex(selectedImgIndex - 1);
  };

  const renderDots = () => {
    return imgUrls.map((i, index) => (
      <StyledDot
        key={index}
        active={selectedImgIndex == index}
        onClick={() => setSelectedImgIndex(index)}
      />
    ));
  };

  const multiplePhotos = (
    <>
      <StyledPhotoCarousel data-label="photo-carousel">
        <StyledArrowIcon
          data-label="fa-left"
          icon={faChevronLeft}
          onClick={handlePreviousImgClick}
        />
        <div {...swipeHandlers}>
          <StyledCarouselPhoto
            key={`selected-photo-${selectedImgIndex}`}
            id="photo"
            imgUrl={`url(${imgUrls[selectedImgIndex]})`}
            data-label="carousel-photo"
          />
        </div>
        <StyledArrowIcon
          data-label="fa-right"
          icon={faChevronRight}
          onClick={handleNextImgClick}
        />
      </StyledPhotoCarousel>
      <div style={{ display: 'flex' }}>{renderDots()}</div>
    </>
)

  const singlePhoto = (
    <StyledPhotoCarousel data-label="photo-carousel">
        <StyledCarouselPhoto
          key={`selected-photo-${selectedImgIndex}`}
          id="photo"
          imgUrl={`url(${imgUrls[selectedImgIndex]})`}
          data-label="carousel-photo"
        />
    </StyledPhotoCarousel>
  )
  return imgUrls.length == 1 ? singlePhoto : multiplePhotos;
}

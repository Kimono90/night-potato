import React from 'react';
import { StyledImageUploader } from './PhotoUpload.styles';
import { StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';

export function PhotoUpload() {
  function onDrop(pictures: string[]) {
    console.log(pictures);
  }

  return (
    <StyledSummaryCard>
      <StyledTitle data-label="title">Picture</StyledTitle>
      <StyledImageUploader
        withIcon={false}
        buttonText="Upload your recipe picture"
        onChange={(_, pictures) => onDrop(pictures)}
        imgExtension={['.jpg', '.png', '.webp']}
        maxFileSize={2621440}
        withPreview
        label="Accepted files: jpg, png & webp with a max file size of 2.5mb"
        labelStyles={{ fontSize: '1rem' }}
        errorStyle={{ fontSize: '1rem' }}
        fileContainerStyle={{ backgroundColor: '#c9a495', padding: '1rem', margin: '0' }}
        buttonStyles={{ font: 'inherit', backgroundColor: '#7d6c6a' }}
        singleImage
      />
    </StyledSummaryCard>
  );
}

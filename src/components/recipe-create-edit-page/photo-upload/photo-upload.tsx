import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { FileSizeErrorMessage, StyledPreviewImg, StyledUploadField } from './photo-upload.styles';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import axios from 'axios';

type Props = {
  onImageChange: (encodedImage: string) => void;
  image: string;
};

export function PhotoUpload({ onImageChange, image }: Props) {
  const [selectedImage, setSelectedImage] = useState<string>(image);
  const [fileTooBig, setFileTooBig] = useState<boolean>(false);

  const upLoadButtonText = selectedImage ? 'Change image' : 'Choose image';

  useEffect(() => {
    if (image) {
      setSelectedImage(image);
    } else {
      setSelectedImage('');
    }
  }, [image]);

  function getBase64(file: File): Promise<string> {
    return new Promise((resolve) => {
      let baseURL = '';
      let reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result as string;
        resolve(baseURL);
      };
    });
  }

  async function handleFileSelection(event: any) {
    setFileTooBig(false);
    if (event.target.files[0].size > 3000000) {
      setFileTooBig(true);
      event.target.value = null;
      return;
    }

    const encodedImage = await getBase64(event.target.files[0]);
    onImageChange(encodedImage);
    setSelectedImage(encodedImage);
  }

  return (
    <StyledSummaryCard>
      <StyledTitle data-label="title">Recipe picture</StyledTitle>
      <StyledBody>
        <StyledUploadField htmlFor="file-upload">{upLoadButtonText} &#129364;</StyledUploadField>
        <input
          style={{ display: 'none' }}
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          name="image"
          type="file"
          onChange={handleFileSelection}
        />
        <StyledPreviewImg src={selectedImage || ''} alt="" width="70%" />
        {fileTooBig ? (
          <FileSizeErrorMessage>
            <p>The file size of your picture is too big &#128148;</p>
            <p>Please make sure it is not bigger than 3mb.</p>
          </FileSizeErrorMessage>
        ) : null}
      </StyledBody>
    </StyledSummaryCard>
  );
}

import React, { useState } from 'react';
import { StyledPreviewImg, StyledUploadField } from './PhotoUpload.styles';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';
import { StyledImageUploader } from '../photo-upload/PhotoUpload.styles';

type Props = {
  onFileSelection: (base64String: string) => void;
}

export function PhotoUpload({onFileSelection}: Props) {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [fieldHasError, setFieldHasError] = useState<boolean>(false);


  function getBase64(file: File): Promise<string> {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result as string;
        resolve(baseURL);
      };
    });
  }

  async function handleFileSelection(event: any) {
    if (event.target.files[0].size > 2097152) {
      setFieldHasError(true);
      event.target.value = null;
      return;
    }

    const base64ImageString = await getBase64(event.target.files[0])
    onFileSelection(base64ImageString)
    setSelectedImage((event.target.files[0]));
  }

  return (
      <StyledSummaryCard>
        <StyledTitle data-label="title">Picture</StyledTitle>
        <StyledBody>
          <StyledUploadField htmlFor="file-upload" >
            Choose image
          </StyledUploadField>
          <input style={{display: 'none'}} id="file-upload" accept=".jpeg, .png, .jpg" name="image" type="file" onChange={handleFileSelection} />
          <StyledPreviewImg src={selectedImage ? URL.createObjectURL(selectedImage) : ''} alt="" width="70%" />
        </StyledBody>
      </StyledSummaryCard>
  )
}

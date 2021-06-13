import React, { useState } from 'react';
import { FileSizeErrorMessage, StyledPreviewImg, StyledUploadField } from './photo-upload.styles';
import { StyledBody, StyledSummaryCard, StyledTitle } from '../../shared-styles/shared-styles';

type Props = {
  onImageChange: (base64String: string) => void;
};

export function PhotoUpload({ onImageChange }: Props) {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [fileTooBig, setFileTooBig] = useState<boolean>(false);

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
    if (event.target.files[0].size > 3000000) {
      setFileTooBig(true);
      event.target.value = null;
      return;
    }

    const base64ImageString = await getBase64(event.target.files[0]);
    onImageChange(base64ImageString);
    setSelectedImage(event.target.files[0]);
  }

  return (
    <StyledSummaryCard>
      <StyledTitle data-label="title">Recipe picture</StyledTitle>
      <StyledBody>
        <StyledUploadField htmlFor="file-upload">Choose image &#129364;</StyledUploadField>
        <input
          style={{ display: 'none' }}
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          name="image"
          type="file"
          onChange={handleFileSelection}
        />
        <StyledPreviewImg src={selectedImage ? URL.createObjectURL(selectedImage) : ''} alt="" width="70%" />
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

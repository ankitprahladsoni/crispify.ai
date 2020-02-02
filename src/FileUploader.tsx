import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

interface FileUploadedProps {
  onChange: (uploadedFile: File[]) => void;
}

const FileUploader = (props: FileUploadedProps) => {
  return <DropzoneArea {...props} />;
};

export default FileUploader;

import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

const FileUploader = () => {
  const [files, setFiles] = useState({});

  function uploadFiles(uploadedFile: any) {
    setFiles({
      files: uploadedFile,
    });
  }
  return <DropzoneArea onChange={uploadFiles} />;
};

export default FileUploader;

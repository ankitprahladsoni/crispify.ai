import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { Button } from '@material-ui/core';

interface FileUploadedProps {
  onChange: (uploadedFile: File[]) => void;
}

const FileUploader = (props: FileUploadedProps) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSave(files: File[]) {
    props.onChange(files);
    handleClose();
  }
  return (
    <>
      <Button onClick={handleOpen}>Add Image</Button>
      <DropzoneDialog
        {...props}
        showPreviewsInDropzone={false}
        filesLimit={1}
        open={open}
        onSave={handleSave}
        onClose={handleClose}
      />
    </>
  );
};

export default FileUploader;

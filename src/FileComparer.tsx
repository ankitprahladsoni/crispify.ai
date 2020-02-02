import React from 'react';
import ReactCompareImage from 'react-compare-image';

interface FileUploadedProps {
  leftImage: string;
  rightImage: string;
}
const FileUploader = (props: FileUploadedProps) => {
  return <ReactCompareImage {...props} />;
};

export default FileUploader;

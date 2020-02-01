import React from 'react';
import ReactCompareImage from 'react-compare-image';

const FileUploader = () => {
  return (
    <ReactCompareImage
      leftImage="https://media.gettyimages.com/photos/happy-dog-picture-id182176638?s=2048x2048"
      rightImage="https://media.gettyimages.com/photos/chocolate-labrador-puppy-sitting-in-large-dog-bowl-5-weeks-old-picture-id866757708?s=2048x2048"
    />
  );
};

export default FileUploader;

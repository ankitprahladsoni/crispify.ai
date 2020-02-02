import React, { useState, Component } from 'react';

import './App.css';
import FileUploader from './FileUploader';
import FileComparer from './FileComparer';

const App = () => {
  const [files, setFiles] = useState<File[]>([]);
  function uploadFiles(uploadedFile: File[]) {
    setFiles(prvFiles => [...prvFiles, ...uploadedFile]);
  }

  let leftImage =
    'https://media.gettyimages.com/photos/happy-dog-picture-id182176638?s=2048x2048';
  let rightImage =
    'https://media.gettyimages.com/photos/chocolate-labrador-puppy-sitting-in-large-dog-bowl-5-weeks-old-picture-id866757708?s=2048x2048';

  if (files.length > 0) {
    let file: File = files[0];
    let something: string = URL.createObjectURL(file);

    leftImage = something;
    rightImage = leftImage;
  }

  return (
    <div className="App">
      <FileUploader onChange={uploadFiles} />
      <FileComparer leftImage={leftImage} rightImage={rightImage} />
    </div>
  );
};

export default App;

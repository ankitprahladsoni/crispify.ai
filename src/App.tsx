import React, { useState } from 'react';

import './App.css';
import FileUploader from './FileUploader';
import FileComparer from './FileComparer';
import { Box, Grid, CircularProgress } from '@material-ui/core';

const App = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  async function uploadFiles(uploadedFile: File[]) {
    setCompleted(false);
    setUploaded(true);
    await fetch('http://34.73.19.123:5000/clear');
    let data = new FormData();
    data.append('file', uploadedFile[0]);
    let response = await fetch('http://34.73.19.123:5000/', {
      method: 'POST',
      body: data,
    });
    let body = await response.blob();
    setFiles([URL.createObjectURL(uploadedFile[0]), URL.createObjectURL(body)]);
    setCompleted(true);
  }

  let imageComponent;

  if (uploaded && !completed) {
    imageComponent = <CircularProgress />;
  } else if (uploaded && completed) {
    let [leftImage, rightImage] = files;
    imageComponent = (
      <FileComparer leftImage={leftImage} rightImage={rightImage} />
    );
  }

  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} justify="center" alignItems="center">
          <FileUploader onChange={uploadFiles} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item sm={6} justify="center" alignItems="center">
          {imageComponent}
        </Grid>
      </Grid>
    </>
  );
};

export default App;

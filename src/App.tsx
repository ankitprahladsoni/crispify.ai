import React from 'react';

import './App.css';
import FileUploader from './FileUploader';
import FileComparer from './FileComparer';

const App = () => {
  return (
    <div className="App">
      <FileUploader />
      <FileComparer />
    </div>
  );
};

export default App;

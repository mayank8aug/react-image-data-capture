import React from 'react'

import ImageCapture from 'react-image-data-capture';

const App = () => {
  const onCapture = imageData => { console.log(imageData) };
  const onError = error => { console.log(error) };
  return <ImageCapture onCapture={onCapture} onError={onError} width={300} userMediaConfig={{ video: true }} />
}

export default App

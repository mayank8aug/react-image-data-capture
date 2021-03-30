import React from 'react'

import ImageCapture from 'react-image-capture'
import 'react-image-capture/dist/index.css'

const App = () => {
  const onCapture = imageData => { debugger };
  const onError = error => { debugger };
  return <ImageCapture onCapture={onCapture} onError={onError} width={300} userMediaConfig={{ video: true }} />
}

export default App

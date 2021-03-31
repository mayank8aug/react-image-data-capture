import React, { useState, useCallback, useMemo } from 'react'

import ImageCapture from 'react-image-data-capture';

const App = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const onCapture = imageData => { setImgSrc(imageData.webP) };
  const onError = useCallback(error => { console.log(error) }, []);
  const config = useMemo(() => ({ video: true }), []);
  return (
    <>
      <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={300}
        userMediaConfig={config}
      />
      {imgSrc &&
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      }
    </>
  );
}

export default App

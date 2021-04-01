import React, { useState, useCallback, useMemo } from "react";

import ImageCapture from "react-image-data-capture";

const App = () => {
  const config = useMemo(() => ({ video: true }), []);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    // read as blob
    // imageData.blob
  };
  const onError = useCallback((error) => {
    console.log(error);
  }, []);

  // imgFile can be used as a file upload field form submission
  const formData = new FormData();
  formData.append("file", imgFile);

  return (
    <>
      <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={300}
        userMediaConfig={config}
      />
      {imgSrc && (
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      )}
    </>
  );
};

export default App;

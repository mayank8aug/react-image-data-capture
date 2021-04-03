# react-image-data-capture

> Component to capture camera image. The image data can be retrieved as a blob, a webP or a file object.

[![NPM](https://img.shields.io/npm/v/react-image-data-capture.svg)](https://www.npmjs.com/package/react-image-data-capture) ![npm](https://img.shields.io/npm/dm/react-image-data-capture)

## Install

```bash
npm install react-image-data-capture
```

## Usage

```jsx
import React from 'react';
import ImageCapture from 'react-data-image-capture';

function MyImageCaptureComponent() {
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
  
  // Use useCallback to avoid unexpected behaviour while rerendering
  const onError = useCallback((error) => { console.log(error) }, []);
  
  // Use useMemo to avoid unexpected behaviour while rerendering
  const config = useMemo(() => ({ video: true }), []);
  /*
    { video: true } - Default Camera View
    { video: { facingMode: environment } } - Back Camera
    { video: { facingMode: "user" } } - Front Camera
  */

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
      {imgSrc &&
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      }
    </>
  );
}
```

## Examples

To play around with the component, try these interactive sample apps

[CodeSandbox](https://codesandbox.io/s/react-image-data-capture-5cc5z)


## Props

| Prop | Type | Optional | Default | Description |
| --- | :---: | :---: | :---: | --- |
| onCapture | Function | No | - | Callback function with imageData as a param to be triggered on image capture. imageData is an object that contains the blob, webP and file object representation of the captured image. |
| onError | Function | Yes | - | Callback function with error as a param to be triggered in case of error while accessing the camera. | |
| width | Number | No | - | Width of the camera stream to be rendered in px. |
| userMediaConfig | Object | No | -- | [MediaStreamContraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints) object to be passed to the [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). |



## License

MIT © [mayank8aug](https://github.com/mayank8aug)

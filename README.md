# react-image-data-capture

> Component to capture camera image

[![NPM](https://img.shields.io/npm/v/react-image-data-capture.svg)](https://www.npmjs.com/package/react-image-data-capture) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-data-capture
```

## Usage

```jsx
import React from 'react';
import ImageCapture from 'react-data-image-capture';

function MyImageCaptureComponent() {
  const [imgSrc, setImgSrc] = useState(null);
  const onCapture = imageData => { setImgSrc(imageData.webP) };
  // Use useCallback to avoid unexpected behaviour while rerendering
  const onError = useCallback(error => { console.log(error) }, []);
  // Use useMemo to avoid unexpected behaviour while rerendering
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
```

## Props

| Prop | Type | Optional | Default | Description |
| --- | :---: | :---: | :---: | --- |
| onCapture | Function | No | - | Callback function to be triggered on image capture |
| onError | Function | Yes | - | Callback function to be triggered in case of error while accessing the camera | |
| width | Number | No | - | Width of the camera stream to be rendered in px |
| userMediaConfig | Object | No | -- | [MediaStreamContraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints) object to be passed to the [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |


## Examples

To play around with the component, try these interactive sample apps

[CodeSandbox](https://codesandbox.io/s/react-image-data-capture-5cc5z)


## License

MIT © [mayank8aug](https://github.com/mayank8aug)

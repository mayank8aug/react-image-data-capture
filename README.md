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
  // Make sure to use useCallback to avoid unexpected behaviour while rerendering
  const onError = useCallback(error => { console.log(error) }, []);
  // Make sure to use useMemo to avoid unexpected behaviour while rerendering
  const config = useMemo(() => ({ video: true }), []);
  return (
    <>
      <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={300}
        userMediaConfig={config}
        closeAfterCapture
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

## License

MIT © [mayank8aug](https://github.com/mayank8aug)

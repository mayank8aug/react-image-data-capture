# react-image-capture

> Component to capture camera image

[![NPM](https://img.shields.io/npm/v/react-image-capture.svg)](https://www.npmjs.com/package/react-image-capture) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-data-capture
```

## Usage

```jsx
import React, { Component } from 'react'

import ImageCapture from 'react-data-image-capture';

class Test extends Component {
  const onCaptureFn = imageData => { console.log(imageData); };
  const onErrorFn = error -> { console.log(error); };
  render() {
    return <ImageCapture onCapture={onCaptureFn} onError={onErrorFn} width={300} userMediaConfig={{ video: true }} />
  }
}
```

## License

MIT © [mayank8aug](https://github.com/mayank8aug)

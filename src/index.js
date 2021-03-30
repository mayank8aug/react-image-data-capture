import React, { Fragment } from 'react';
import { useState, useEffect, useRef } from 'react';
import { createRef, useCallback } from 'react';
import './index.css';

function ImageCapture(props) {
    const { onCapture, onError, width, userMediaConfig } = props;
    const [streaming, setStreaming] = useState(false);
    const playerRef = createRef();
    const canvasRef = createRef();
    const tracks = useRef();
    useEffect(() => {
        let timeout;
        navigator.mediaDevices
            .getUserMedia(userMediaConfig)
            .then((stream) => {
                playerRef.current.srcObject = stream;
                tracks.current = stream.getTracks();
                timeout = setTimeout(() => setStreaming(true), 2000);
            }).catch(error => {
                console.error('Error: Unable to access camera ::', error);
                if (onError) onError(error);
            });
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [playerRef, onError, userMediaConfig]);

    const captureImage = useCallback(() => {
        const imageWidth = playerRef.current.offsetWidth;
        const imageHeight = playerRef.current.offsetHeight;
        [canvasRef.current.width, canvasRef.current.height] = [imageWidth, imageHeight];
        const context = canvasRef.current.getContext('2d');
        context.drawImage(playerRef.current, 0, 0, imageWidth, imageHeight);
        // Trigger the callback function
        if (onCapture) {
            const webPData = canvasRef.current.toDataURL('image/webp');
            canvasRef.current.toBlob((blob) => {
                onCapture({ blob, webP: webPData, file: new File([webPData], `${new Date().getTime}.png`)});
            });
        }
        // Stop the camera stream
        if (tracks.current) {
            tracks.current[0].stop();
        }  
    }, [onCapture, canvasRef, playerRef]);

    return (
        <div className="image-container">
            <video ref={playerRef} autoPlay width={width}></video>
            {streaming &&
                <Fragment>
                    <div className="capture-btn" onClick={captureImage} />
                    <canvas className="image-canvas" ref={canvasRef} />
                </Fragment>
            }
        </div>
    );
}

export default ImageCapture;
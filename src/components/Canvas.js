import React, { useEffect } from 'react'
import { fabric } from 'fabric';

export default function Canvas({ name, height, width, setCanvas }) {
  
  // canvas initiator 
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
        height,
        width,
      }).setZoom(0.5)
  )
  
  // create canvas
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

    return(
      <div id="canvas-container"> 
        <h1>{name}</h1>
        <canvas id="canvas" />
      </div>
  );
}

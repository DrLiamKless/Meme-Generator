import React, { useEffect } from 'react'
import { fabric } from 'fabric';

export default function Canvas({ height, width, setCanvas }) {
  
  // canvas initiator 
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
        height,
        width,
      }).setZoom(0.4)
  )
  
  // create canvas
  useEffect(() => {
    setCanvas(initCanvas());
  },[]);

    return(
      <div id="canvas-container"> 
        <canvas id="canvas" />
      </div>
  );
}

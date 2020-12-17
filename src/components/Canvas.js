import React, { useEffect, useRef, useState } from 'react'
import { fabric } from 'fabric';
import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';

export default function Canvas({ image }) {
  const [canvas, setCanvas] = useState(undefined);
  const canvasRef = useRef(undefined)
  const [decorations, setDecorations] = useState([])
  
  // canvas initiator 
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
        height: image?.height,
        width: image?.width,
        // backgroundColor: null,
        // backgroundImage: image?.url,
        // foreignObjectRendering: true,
        allowTaint: true,
      })
  )
  
  // create canvas
  useEffect(() => {
    console.log(
      canvasRef
      )
  }, [canvasRef]);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  //  setDecorations on start
  useEffect(() => {
    if(canvas) {
      setTimeout(() => {
        addText(canvas, 'topText', image.height / 6, image.width / 3, image.width /8);
        addText(canvas, 'bottomText', image.height / 1.5, image.width / 4, image.width /8);
        addBackgroundImage(canvas, image)
      }, 500)
    }
  }, [canvas]);
  
  // join elements to decorations
  const joinToDecorations = ((decoration) => {setDecorations(prevDecorations => [...prevDecorations, decoration])})
  
  // add rectangle
  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  // add text
  const addText = (canvi, text, top=0, left=0,fontSize=100) => {
    const textBox = new fabric.Textbox(text);
    textBox.set({
      top,
      left,
      fontSize,
    });
    canvi.add(textBox);
    // canvi.renderAll();
    joinToDecorations(textBox)
  }

  const addBackgroundImage = (canvi, image) => {
      new fabric.Image.fromURL(image.url, (img => {
      canvi.backgroundImage = img;
      canvi.renderAll()
    }) ,{crossOrigin: "anonymous"});
  }

  const downloadMeme = (canvi, name="myMeme.jpg") => {
    saveAs(canvi.toDataURL("image/png").replace("image/png", "image/octet-stream"), name)
  }

    return(
      <div>
        <h1>Editor</h1>
        <Button onClick={() => addText(canvas, 'add')}>Add Text</Button>
        <Button onClick={() => {downloadMeme(canvas)}}>download</Button>
        <canvas id="canvas" ref={canvasRef} />
      </div>
  );
}

import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric';
import { Button } from 'react-bootstrap';

export default function Canvas({ image }) {
  const [canvas, setCanvas] = useState(undefined);
  const [decorations, setDecorations] = useState([])
  
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  
  const initCanvas = () => (
  new fabric.Canvas('canvas', {
      height: image?.height,
      width: image?.width,
      backgroundImage: image?.url
    })
  )

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  const joinToDecorations = ((decoration) => {setDecorations(prevDecorations => [...prevDecorations, decoration])})

  const addText = (canvi, text) => {
    const textBox = new fabric.Textbox(text);
    canvi.add(textBox);
    canvi.renderAll();
    joinToDecorations(textBox)
  }

    return(
      <div>
        <h1>Editor</h1>
        <Button onClick={() => addText(canvas, 'add')}>Add Text</Button>
        <canvas id="canvas" />
      </div>
  );
}

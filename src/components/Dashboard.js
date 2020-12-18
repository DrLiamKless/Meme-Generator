import React, { useEffec, useEffect, useStatet } from 'react'
import { fabric } from 'fabric';
import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { Download, StarFill, Trash, Type, TriangleFill, SquareFill, CircleFill } from 'react-bootstrap-icons'
import { SketchPicker } from 'react-color';

export default function Dashboard({ image ,canvas, setStorageFull }) {
      
  //  setDecorations on start
  useEffect(() => {
    if(canvas) {
      setTimeout(() => {
        addText(canvas, 'top text', 1, 5, image.width, image.width /8);
        addText(canvas, 'bottom text', image.height / 1.3, 5, image.width, image.width /8);
        addBackgroundImage(canvas, image)
      }, 500)
    }
  }, [canvas]);

    // add backgroundImage
  const addBackgroundImage = (canvi, image) => {
    new fabric.Image.fromURL(image.url, (img => {
    canvi.backgroundImage = img;
    canvi.setWidth(image.width * canvi.getZoom());
    canvi.setHeight(image.height * canvi.getZoom());
    // canvi.renderAll()
  }) ,{crossOrigin: "anonymous"});
  }

  // delete active object
  const deleteObject = (canvi) => {
    const activeObject = canvi.getActiveObject()
    if (activeObject) {
      canvas.remove(activeObject);
    }
  }

  // add rectangle
  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 200,
      width: 200,
      fill: 'green'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  const addTriangle = canvi => {
    const triangle = new fabric.Triangle({
      height: 200,
      width: 200,
      fill: 'blue'
    });
    canvi.add(triangle);
    canvi.renderAll();
  }

  const addCircle = canvi => {
    const circle = new fabric.Circle({
      height: 200,
      width: 200,
      fill: 'orange'
    });
    canvi.add(circle);
    canvi.renderAll();
  }

  // add text
  const addText = (canvi, text, top=0, left=0, width=0, fontSize=100) => {
    const textBox = new fabric.Textbox(text);
    textBox.set({
      top,
      left,
      fontSize,
      width,
      textAlign: 'center'
    });
    canvi.add(textBox);
    // canvi.renderAll();
  }

  // change color of active object
  const changeColor = (canvi, color) => {
    try {
      const rgb = color.rgb;
      const {r, g, b, a} = rgb
      const activeObject = canvi?.getActiveObject()
      activeObject?.set({fill: `rgba(${r},${g},${b},${a})`})
    } catch (err) {
      console.log(err)
    }
  }

  // download meme
  const downloadMeme = (canvi, name="myMeme.jpg") => {
    saveAs(canvi.toDataURL("image/png").replace("image/png", "image/octet-stream"), name)
  }

  // save to favorites
  const saveToFavorites = (canvi, name="myMeme") => {
    try {
      const url = canvi.toDataURL("image/png").replace("image/png", "image/octet-stream")
      const savedMemes = JSON.parse(localStorage.getItem("savedMemes")) || [];
      savedMemes.push({name, url});
      localStorage.setItem("savedMemes", JSON.stringify(savedMemes));
      setStorageFull({show: true, full: false})
    } catch (error) {
      if(error.name === "QuotaExceededError") {
        setStorageFull({show: true, full: true})
      }
      console.log(error)
    } 
  }

  return (
    <div id="dashboard">
      <nav>
        <ul>
          <li><Button size="lg" variant="danger" onClick={() => deleteObject(canvas)}><Trash /></Button></li>
          <li><Button size="lg" variant="secondary" onClick={() => {downloadMeme(canvas)}}><Download /></Button></li>
          <li><Button size="lg" variant="info" onClick={() => {saveToFavorites(canvas)}}><StarFill /></Button></li>
        </ul>
      </nav>
      <ul>
        <il>
          <SketchPicker onChange={(color, event) => {changeColor(canvas, color)}}/>
        </il>
      </ul>
      <ul>
        <li><Button size="lg" variant="dark" onClick={() => addText(canvas, 'TEXT')}><Type /></Button></li>
        <li><SquareFill className="rect" onClick={() => addRect(canvas)}></SquareFill></li>
        <li><TriangleFill className="triangle" onClick={() => addTriangle(canvas)}></TriangleFill></li>
        <li><CircleFill className="circle" onClick={() => addCircle(canvas)}></CircleFill></li>
      </ul>
    </div>
  )
}

import React, { useEffect } from 'react'
import { fabric } from 'fabric';
import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { Download, StarFill, Trash, Type } from 'react-bootstrap-icons'

export default function Dashboard({ image ,canvas, setStorageFull }) {

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
        
       // add backgroundImage
      const addBackgroundImage = (canvi, image) => {
        new fabric.Image.fromURL(image.url, (img => {
        canvi.backgroundImage = img;
        canvi.setWidth(image.width * canvi.getZoom());
        canvi.setHeight(image.height * canvi.getZoom());
        // canvi.renderAll()
      }) ,{crossOrigin: "anonymous"});
      }
    
      const deleteObject = (canvi) => {
        const activeObject = canvi.getActiveObject()
        if (activeObject) {
          canvas.remove(activeObject);
        }
      }
    
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
      }
    
      // download meme
      const downloadMeme = (canvi, name="myMeme.jpg") => {
        saveAs(canvi.toDataURL("image/png").replace("image/png", "image/octet-stream"), name)
      }
    
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
          <li><Button size="lg" variant="dark" onClick={() => addText(canvas, 'add')}><Type /></Button></li>
          <li><Button size="lg" variant="secondary" onClick={() => {downloadMeme(canvas)}}><Download /></Button></li>
          <li><Button size="lg" variant="info" onClick={() => {saveToFavorites(canvas)}}><StarFill /></Button></li>
        </ul>
      </nav>
    </div>
  )
}

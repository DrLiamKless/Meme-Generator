import React, { useEffect, useState } from 'react';
import Canvas from '../components/Canvas'
import { Alert } from 'react-bootstrap'
import Dashboard from '../components/Dashboard';

export default function Editor({ image }) {
  const [canvas, setCanvas] = useState(undefined);
  const [storageFull, setStorageFull] = useState({show: false, full: false});

  useEffect(() => {
    if (storageFull.show) {
      setTimeout(() => {
        setStorageFull(prev => ({show: false, full: prev.full}))
      }, 2500);
    }
  }, [storageFull])

  return (
    <>
      <h1 style={{paddingTop:"40px"}}>{image.name}</h1>
      <div id="editor">
      <Alert 
        show={storageFull.show} 
        variant={storageFull.full ? "danger" : "success"} 
        style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          transition: "all .2s ease",
          zIndex: 100,
        }}
      >
        {storageFull.full ? "Your storage is full! you can downloaod your saved memes and then remove them safely" : "Succesfully saved!"}      </Alert>
        <Canvas canvas={canvas} setCanvas={setCanvas} name={image.name} height={image?.height} width={image?.width} />
        <Dashboard setStorageFull={setStorageFull} image={image} canvas={canvas} setCanvas={setCanvas} />
        
      </div>
    </>
  )
}

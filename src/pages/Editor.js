import React from 'react'
import Canvas from '../components/Canvas'
import { Alert } from 'react-bootstrap'

export default function Editor({ image, storageFull, setStorageFull }) {

  return (
    <>
      <div id="editor">
      <Alert 
        show={storageFull} 
        variant={"danger"} 
        style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          transition: "all .2s ease",
        }}
      >
          Your storage is full! you can downloaod your saved memes and then remove them safely
      </Alert>
        <Canvas setStorageFull={setStorageFull} image={image} />
      </div>
    </>
  )
}

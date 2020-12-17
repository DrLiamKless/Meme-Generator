import React from 'react'
import Canvas from '../components/Canvas'

export default function Editor({ image }) {
  return (
    <div id="editor">
      <Canvas image={image} />
    </div>
  )
}

import React from 'react'
import  { Image, OverlayTrigger, Popover, Spinner } from 'react-bootstrap'

export default function GalleryImg({ img }) {

  return (
  <>
    { 
    img ?
      (
        <OverlayTrigger 
        placement={"top"}
        overlay={
          <Popover id={`popover-positioned-top`} style={{zIndex: 1}}>
          <Popover.Title as="h3">{img.name}</Popover.Title>
        </Popover>
        }
        >
          <Image src={img.url} thumbnail className="gallery-img"/>
        </OverlayTrigger> 
      )
    :
      <div style={{width: '100px', height:'100px'}}>
        <Spinner animation="grow" size="xl" />
      </div>
    }
  </>
  )
}

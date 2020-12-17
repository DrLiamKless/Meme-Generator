import React from 'react'
import  { Image, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'

export default function GalleryImg({ img }) {

  return (
    <>
      <OverlayTrigger 
      placement={"right-end"}
      overlay={
        <Popover id={`popover-positioned-right-end`} style={{zIndex: 1}}>
          <Popover.Title as="h3">{img.name}</Popover.Title>
          {img.bottomText || img.topText &&
          <Popover.Content>
            {img.bottomText && `bottom text: ${img.bottomText}`}
            {img.topText && `bottom text: ${img.topText}`}
            </Popover.Content>
          }
        </Popover>
      }
      >
        <Image src={img.url} thumbnail className="gallery-img"/>
      </OverlayTrigger> 
    </>
  )
}

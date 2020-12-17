import React, { useRef, useState } from 'react'
import {Nav, Navbar, Overlay, Tooltip } from 'react-bootstrap'

export default function NavBar({setTab, tab, pickedMeme}) {
  const [showDisabledAlert, setShowDisabledAlert] = useState(false);
  const editorNav = useRef(null);

  const showAlert = () => {
    setShowDisabledAlert(true);
    setTimeout(() => {
    setShowDisabledAlert(false)
    }, 2000)
  }

  return (
    <div style={{width: '100vw'}}>
      <Navbar onSelect={(tab) => setTab(tab)} expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><strong>MeMe Generator</strong></Navbar.Brand>
        <Nav activeKey={tab}>
          <Nav.Item>
            <Nav.Link eventKey="gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item ref={editorNav} onClick={!pickedMeme && showAlert}>
            <Nav.Link
              disabled={pickedMeme ? false : true} 
              eventKey="editor">Editor
            </Nav.Link>
            <Overlay target={editorNav.current} show={showDisabledAlert} placement="bottom">
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  {...props}
                  style={{
                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3,
                    ...props.style,
                  }}
                >
                  Must Pick Meme First
                </div>
              )}
            </Overlay>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="my memes">My memes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import {Nav, Navbar, Overlay } from 'react-bootstrap'
import icon from '../images/icon.jpg'

export default function NavBar({setTab, tab, pickedMeme}) {
  const editorNav = useRef(null);
  const [showDisabledAlert, setShowDisabledAlert] = useState(false);
  
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  // tacking the scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const showAlert = () => {
    setShowDisabledAlert(true);
    setTimeout(() => {
    setShowDisabledAlert(false)
    }, 2000)
  }

  return (
    <div style={{width: '100vw', position: scrollPosition > window.innerHeight ? 'fixed' : 'relative', top: 0, zIndex: 2}}>
      <Navbar onSelect={(tab) => setTab(tab)} expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <img alt="icon" src={icon} style={{height: '30px', width: '30px', fontFamily: "Nunito"}}/>
          <strong style={{paddingLeft: '10px'}}>Meme Generator</strong>
          </Navbar.Brand>
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
                    zIndex: 3,
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
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

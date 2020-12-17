import React from 'react'
import { Button, Card, Collapse, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';

export default function ImageModal({ image, show, handleKeepSearching, handlePickMeme }) {
  return (
    <Modal
      onHide={handleKeepSearching}
      show={show}
      size="sm"
      centered
    >
      <Modal.Body size="sm">
        <Collapse in={show} timeout={0}>
          <Card style={{ width: '100%' }}>
            <Card.Img className="modal-img" variant="top" src={image?.url} />
            <Card.Body>
              <Card.Title>{image?.name}</Card.Title>
              <Card.Text>
                Here will be the meme info
              </Card.Text>
            </Card.Body>
            <span style={{display: 'flex', justifyContent: 'space-around', padding: '5px'}}>
            <Button variant="success" onClick={handlePickMeme}>
                This one!
              </Button>
              <Button variant="danger" onClick={handleKeepSearching}>
                Keep Searchin'...
              </Button>
            </span>
            {/* <ListGroup className="list-group-flush">
              <ListGroupItem>meme tags</ListGroupItem>
              <ListGroupItem>meme rank</ListGroupItem>
            </ListGroup> */}
          </Card>
        </Collapse>
      </Modal.Body>
    </Modal>
  );
}

import React, { useEffect, useState } from 'react'
import { Badge, Image } from 'react-bootstrap';
import GalleryImg from '../components/GalleryImg';
import myMemeImg from '../images/myMeme.jpg'

export default function MyMemes() {
  const [savedMemes, setSavedMemes] = useState([])

  useEffect(() => {
    try{
      const memesFromLocalStorage = localStorage.getItem("savedMemes")
      setSavedMemes(JSON.parse(memesFromLocalStorage));
    } catch (error) {
      console.log(error)
    }
  }, [])

  const removeFromLocalStorage = (index) => {
    try {
      setSavedMemes((prevMemes => {
        prevMemes.splice(index, 1)
        localStorage.setItem('savedMemes', JSON.stringify([...prevMemes]))
        return [...prevMemes]
      }))
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="gallery">
        <h1>Our Meme:</h1>
        <ul>
          <li className="gallery-list-item">
            <Image src={myMemeImg} />
          </li >
        </ul>
        <h1 style={{paddingTop: '200px'}}>Your Memes:</h1>
        { savedMemes[0] ? 
        (<ul>
          {   
            savedMemes?.map((meme, i) => (
              <li
              key={meme.url}
              className="gallery-list-item"
              >
              <Badge variant="danger" style={{borderRadius: '50%', marginTop: '30px', float: 'left'}} onClick={() => {removeFromLocalStorage(i)}}>X</Badge>
              <GalleryImg 
                img={meme}
              >
              </GalleryImg>
            </li >
            ))
          }
        </ul>
        ) :
        (
          <div>No saved memes yet</div>
          )}
    </div>
  )
}

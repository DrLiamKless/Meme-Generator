import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import GalleryImg from '../components/GalleryImg';

export default function MyMemes() {
  const [savedMemes, setSavedMemes] = useState([])

  useEffect(() => {
    try{
      const memesFromLocalStorage = localStorage.getItem("savedMemes")
      setSavedMemes(JSON.parse(memesFromLocalStorage));
      console.log(savedMemes)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const removeFromLocalStorage = (index) => {
    try {
      setSavedMemes((prevMemes => {
        prevMemes.splice(index, 1)
        localStorage.setItem('savedMemes', JSON.stringify(prevMemes))
        return [...prevMemes]
      }))
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className="my-memes">
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

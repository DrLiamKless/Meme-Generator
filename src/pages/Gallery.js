import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryImg from '../components/GalleryImg';
import ImageModal from '../components/ImageModal';

export default function Gallery({ setPickedMeme, pickedMeme, setTab }) {
  const [images, setImages] = useState([])
  const [showMemeModal, setShowMemeModal] = useState(false);

  const handleShowModal = (image) => {setShowMemeModal(true); setPickedMeme(image)};
  const handlePickMeme = () => {setShowMemeModal(false); setTab('editor')};
  const handleKeepSearching = () => {setShowMemeModal(false); setPickedMeme(undefined)};

  const fetchImages = async () => {
    const { data } = await axios.get('https://api.imgflip.com/get_memes');
    setImages(data.data.memes)
  }

  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <div id="gallery">
      <ul>
        {images?.map(image => (
          <li
            key={image.url}
            className="gallery-list-item"
            onClick={() => {handleShowModal(image);}}
          >
            <GalleryImg 
            img={image}
            />
          </li >
        ))}
      </ul>
      <ImageModal 
        image={pickedMeme}
        show={showMemeModal}
        handlePickMeme={handlePickMeme}
        handleKeepSearching={handleKeepSearching}
      />
    </div>
  )
}

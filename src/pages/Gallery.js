import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryImg from '../components/GalleryImg';
import ImageModal from '../components/ImageModal';

export default function Gallery({ setPickedMeme, pickedMeme, setTab }) {
  const [images, setImages] = useState([])
  const [showMemeModal, setShowMemeModal] = useState(false);

  const handleShowModal = (image) => {setShowMemeModal(image);};
  const handlePickMeme = () => {setShowMemeModal(false); setPickedMeme(showMemeModal); setTab('editor')};
  const handleKeepSearching = () => {setShowMemeModal(false)};

  const fetchImages = async () => {
    const { data } = await axios.get('https://api.imgflip.com/get_memes');
    setImages(data.data.memes)
  }

  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <div className="gallery">
      <h1 style={{fontFamily: "Spirax", paddingBottom: '60px'}}>One Meme is worth a thousand words...</h1>
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
        image={showMemeModal}
        show={showMemeModal ? true : false}
        handlePickMeme={handlePickMeme}
        handleKeepSearching={handleKeepSearching}
      />
    </div>
  )
}

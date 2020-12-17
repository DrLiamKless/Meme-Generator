import './App.css';
import Gallery from './pages/Gallery';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useLayoutEffect } from 'react';
import NavBar from './components/NavBar';
import Canvas from './components/Canvas';
import Editor from './pages/Editor';
import MyMemes from './pages/MyMemes';

function App() {
  const [pickedMeme, setPickedMeme] = useState(undefined);
  const [tab, setTab] = useState('gallery');
  const [storageFull, setStorageFull] = useState(false);

  return (
    <div className="App">
      <NavBar setTab={setTab} tab={tab} pickedMeme={pickedMeme} />
      {
        tab === 'gallery' &&
        <Gallery setTab={setTab} setPickedMeme={setPickedMeme} pickedMeme={pickedMeme}/>
      }
      {
        tab === 'editor' &&
      <Editor image={pickedMeme} setStorageFull={setStorageFull} storageFull={storageFull} />
      }
      {
        tab === 'my memes' &&
        <MyMemes storageFull={storageFull}/>
      }
    </div>
  );
}

export default App;

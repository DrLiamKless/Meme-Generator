import './App.css';
import Gallery from './pages/Gallery';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useLayoutEffect } from 'react';
import NavBar from './components/NavBar';
import Canvas from './components/Canvas';
import Editor from './pages/Editor';

function App() {
  const [pickedMeme, setPickedMeme] = useState(undefined);
  const [tab, setTab] = useState('gallery');

  return (
    <div className="App">
      <NavBar setTab={setTab} tab={tab} pickedMeme={pickedMeme} />
      {
        tab === 'gallery' &&
        <Gallery setTab={setTab} setPickedMeme={setPickedMeme} pickedMeme={pickedMeme}/>
      }
      {
        tab === 'editor' &&
        <Editor image={pickedMeme}/>
      }
      {
        tab === 'My memes' &&
        <div>My Memes</div>
      }
    </div>
  );
}

export default App;

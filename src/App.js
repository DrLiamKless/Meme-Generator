import './App.css';
import Gallery from './pages/Gallery';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useLayoutEffect } from 'react';
import NavBar from './components/NavBar';
import Canvas from './components/Canvas';
import Editor from './pages/Editor';
import MyMemes from './pages/MyMemes';
import Landing from './pages/Landing';

function App() {
  const [pickedMeme, setPickedMeme] = useState(undefined);
  const [tab, setTab] = useState('gallery');

  return (
    <div className="App">
      <Landing />
      <NavBar setTab={setTab} tab={tab} pickedMeme={pickedMeme} />
      <div>
      {
        tab === 'gallery' &&
        <Gallery setTab={setTab} setPickedMeme={setPickedMeme} pickedMeme={pickedMeme}/>
      }
      {
        tab === 'editor' &&
        <Editor image={pickedMeme} />
      }
      {
        tab === 'my memes' &&
        <MyMemes />
      }
      </div>
    </div>
  );
}

export default App;

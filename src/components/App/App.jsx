import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, [])

  function getGalleryList() {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.log('Error in getGalleryList', err);
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          gallery={gallery}
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;

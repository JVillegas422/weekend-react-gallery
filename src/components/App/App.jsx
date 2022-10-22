import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);

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
          galleryItems={galleryList}
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;

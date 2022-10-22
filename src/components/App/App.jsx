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

  const getGalleryList = () => {
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

  const addLike = () => {
    axios({
      method: 'PUT',
      url: '/gallery/like/:id'
    })
    .then(() => {
      console.log('addLikes');
    })
    .catch((err) => {
      console.log('Something went wrong with addLikes', err);
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          galleryItems={galleryList}
          addLike={addLike}
        />
      </div>
    );
}

export default App;

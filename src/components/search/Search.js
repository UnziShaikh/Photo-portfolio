
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageResults from '../imageResults/imageResults';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const apiUrl = 'https://pixabay.com/api';
  const apiKey = '45214689-52320e1f19e584974cce268a9';

  useEffect(() => {
    if (searchText === '') {
      setImages([]);
      setMessage('');
    } else {
      axios
        .get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`)
        .then(res => {
          const hits = res.data.hits;
          if (hits.length === 0) {
            setImages([]);
            setMessage('No images found');
          } else {
            setImages(hits);
            setMessage('');
          }
        })
        .catch(err => {
          console.error(err);
          setMessage('Error fetching images');
        });
    }
  }, [searchText]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        style={{
          backgroundColor: 'black',
          color: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 100,
          padding: '20px 70px',
          fontSize: 30,
          border: 'none',
          borderBottom: 'groove',
          display: 'block'
        }}
        placeholder="Search for images"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <br />
      {images.length > 0 ? (
        <ImageResults images={images} />
      ) : (
        <p style={{ fontSize: '24px', color: 'white' }}>{message}</p> 
      )}
    </div>
  );
};

export default Search;

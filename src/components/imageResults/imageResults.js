
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

const ImageResults = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
      {images && (
        <ImageList cols={4}>
          {images.map((img) => (
            <ImageListItem
              key={img.id}
            >
              <img src={img.largeImageURL} alt="" />
              <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                <ZoomInIcon color="action" />
              </IconButton>
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <img src={currentImg} alt="" style={{ width: '100%' }} />
        <div style={{ padding: 16 }}>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

ImageResults.defaultProps = {
  images: []
};

export default ImageResults;


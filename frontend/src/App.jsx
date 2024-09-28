import React, { useState } from 'react';
import './App.css';
import Display  from './display';

function App() {
  const [images, setImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [detectedText, setDetectedText] = useState(null);
  const [showDragDrop, setShowDragDrop] = useState(true); 
  

  const backendUrl = 'http://127.0.0.1:5000';

  const handleDragOver = (event) => {
    event.preventDefault(); 
  };
     
    
    const handleDrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));

     
      const imageUrls = imageFiles.map(file => URL.createObjectURL(file));
      setImages(imageUrls);

     
      uploadImages(imageFiles);
    };

    const uploadImage = async (imageFile) => {
      const formData = new FormData();
      formData.append('file', imageFile); 
  
      try {
          const response = await fetch(backendUrl, {
              method: 'POST',
              body: formData,
              headers: {
                 
              },
              mode: 'cors', 
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const result = await response.json();
          console.log('Upload success:', result);
          return result;
      } catch (error) {
          console.error('Error uploading the image:', error);
      }
  };  

  return (
    <div className="App">
      {showDragDrop ? ( 
        <div 
          className="drop-area" 
          onDragOver={handleDragOver} 
          onDrop={handleDrop}>
          {images.length === 0 ? (
            <p>Drag and drop images here</p>
          ) : (
            <div className="image-preview">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Preview ${index}`} className="preview-image" />
              ))}
            </div>
          )}
        </div>
      ) : (<Display text = {detectedText}/>)
      }
    </div>
  );
}

export default App;

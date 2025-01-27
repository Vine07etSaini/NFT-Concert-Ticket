import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Prices() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Hardcoded JSON data
    const data = {
      images: [
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_Corporate_Spirit_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_Corporate+ODI_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_DeepBlue_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_DeepBlue_Spirit_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_Live+News_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_Rankings_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_T20_LowContrast_RGB300.jpg' },
        { imgUrl: 'https://stirring-salmiakki-15af11.netlify.app/ICC_Test_LowContrast_RGB300.jpg' },
      ],
    };

    setImages(data.images);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleContinueClick = () => {
    if (selectedImage) {
      navigate('/ticket', { state: { image: selectedImage } });
      // navigate('/yourTickets', { state: { image: selectedImage } });
    } else {
      alert('Please select an NFT first.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Main Image and Content Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '800px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '0 0 auto', marginRight: '20px', maxWidth: '250px', width: '100%' }}>
          <img
            src="/DiljitConcert.jpg"
            alt="Diljit Concert"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        <div style={{ flex: '1', width: '100%' }}>
          <h2>Concert Details</h2>
          <p>Join us for an unforgettable night with Diljit Dosanjh!</p>
          <p>
            <strong>Date:</strong> December 20, 2023<br />
            <strong>Venue:</strong> Music Hall, Downtown City<br />
            <strong>Price:</strong> $5
          </p>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Choose NFT</h3>
        <p>Choose NFT of your choice</p>
      </div>

      {/* NFT Images Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '900px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.imgUrl}
            alt={`Additional image ${index + 1}`}
            style={{
              width: '22%',
              height: 'auto',
              borderRadius: '8px',
              cursor: 'pointer',
              border: selectedImage === image ? '2px solid #007bff' : 'none',
            }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleContinueClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        
        > 
          Continue
        </button>
      </div>
    </div>
  );
}

export default Prices;

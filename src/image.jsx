import React, { useState } from 'react';

const FrenchFriesInfo = () => {
  // State to track whether the info cards are displayed or not
  const [showInfo, setShowInfo] = useState(false);

  // Function to toggle the display of info cards
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* French fries image */}
      <img
        src="https://image.shutterstock.com/image-photo/golden-french-fries-on-wooden-260nw-1925761636.jpg"
        alt="French Fries"
        style={{ width: '200px', cursor: 'pointer' }}
        onClick={toggleInfo}
      />
      {/* Info cards */}
      {showInfo && (
        <div style={{ marginLeft: '20px' }}>
          <h2>French Fries Info</h2>
          <div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Origin:</strong> France
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Main Ingredients:</strong> Potatoes, oil
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Popular Varieties:</strong> Shoestring fries, steak fries, curly fries
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Serving Style:</strong> Often served as a side dish or snack
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Trivia:</strong> French fries are not actually from France, but Belgium.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrenchFriesInfo;

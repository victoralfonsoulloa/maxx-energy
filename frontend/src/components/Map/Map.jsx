import React from 'react';

const Map = ({ address }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBKdpxPdX_XD1QFR9SAXnkv7zGfrJmfwrU&q=${encodeURIComponent(address)}`;

  return (
    <div className="map-container" style={{ marginTop: '20px', height: '400px', width: '100%' }}>
      <iframe
        title="Location Map"
        src={mapSrc}
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
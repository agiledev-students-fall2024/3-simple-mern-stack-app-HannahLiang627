import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const AboutPage = () => {
    const [aboutInfo, setAboutInfo] = useState(null);
    const [error, setError] = useState('');
  
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutUs`)
        .then((response) => {
          setAboutInfo(response.data);
        })
        .catch((err) => {
          const errMsg = err.response?.data?.error || err.message;
          setError(errMsg);
        });
    }, []);
  
    return (
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : aboutInfo ? (
          <div>
            <h1>{aboutInfo.name}</h1>
            <h2>{aboutInfo.description}</h2>
            <img src={aboutInfo.imageUrl} alt={aboutInfo.name} />
          </div>
        ) : null} {/* Render nothing if loading */}
      </div>
    );
  };
  
  export default AboutPage;
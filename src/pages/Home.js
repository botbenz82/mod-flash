import React from 'react';
import { Link } from 'react-router-dom';
import landImg from '../assets/image/land.jpg'
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <img src={landImg} alt="Welcome" width={'100vw'} className="home-image" />
      <div className="content">
      </div>
    </div>
  );
};

export default Home;


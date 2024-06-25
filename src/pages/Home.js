import React from 'react';
import { useNavigate } from 'react-router-dom';
import landImg from '../assets/image/land.jpg'
import './Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();
  const handleAreaClick = ()=>{
    navigate('/editor');
  }
  return (
    <div className="home-container">
      <img src={landImg} alt="Welcome" useMap='#image-map' className="home-image" />
      <map name="image-map">
        <area
          target=""
          alt="Area click"
          title="Area click"
          coords="120,130,1850,800"
          shape="rect"
          onClick={() => handleAreaClick()}
        />
    </map>
      <div className="content">
      </div>
    </div>
  );
};

export default Home;


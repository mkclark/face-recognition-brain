import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
        },
    onclick: {
      enable: true,
      mode: "push"
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {
        // 
        // <FaceRecognition />} */}
    </div>
  );
}

export default App;

import React from 'react';

import ImageGrid from './components/ImageGrid/ImageGrid';

import TopicCloud from './components/TopicCloud/Topic';
import Navbar from './components/Navbar/NavBar';
import Button from './components/Button/Button';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';

import './App.scss';

function App() {
  return (
    <div className="homepage">
      <div className="header-container">
        <Navbar />
        <h1 className="header-container__headline">
          Empowering the people of medicine through education and community.
        </h1>
        <Button displayNoneOnXs/>
      </div>
      <div className="page-content">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <ImageGrid />
        <TopicCloud />
      </div>
    </div>
  );
}

export default App;

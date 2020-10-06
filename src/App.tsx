import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import TopicCloud from './components/TopicCloud/TopicCloud';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

import './App.scss';

function App() {
  return (
    <div className="homepage">
      <div className="header-container">
        <Navbar />
        <h1 className="header-container__headline">
          Empowering the people of medicine through education and community.
        </h1>
        <Button />
      </div>
      <div className="page-content">
        <Section1 />
        <Section2 />
        <Section3 />

        <span>Explore Our Products</span>

        <span>Education Designed for People Like You</span>

        <span>Authentic, Engaging, and Human</span>

        <span>
          We’re obsessed with making education that respects your time,
          attention span, and humanity. Every piece of education we produce is
          made with intention for a consistently rewarding learning experience.
        </span>

        <span>Unrivaled Educational Excellence</span>

        <span>
          Our physician-led education is carefully designed and presented by
          some of the most qualified and passionate faculty in the world. It
          makes the most of your investment, energy, and intellect and delivers
          a lasting impact far beyond CME credit.
        </span>

        <span>Explore Our Products</span>

        <span>However and Whenever Your Need It</span>

        <span>
          Get education that seamlessly fits into your busy life with
          convenient, tech-forward podcasts, video lectures, and articles, all
          on the go from your phone or tablet.
        </span>
        <h2>See (and Hear) the Hippo Difference for Yourself</h2>
        <ImageGrid />
        <TopicCloud />
      </div>
    </div>
  );
}

export default App;

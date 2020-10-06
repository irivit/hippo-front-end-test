import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import TopicCloud from './components/TopicCloud/TopicCloud';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Section1 from './components/Section1/Section1';

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
        <span>Learn. Grow. Thrive.</span>

        <span>
          At Hippo Education, we believe that medical education should upgrade
          your practice and your life.
        </span>

        <span>
          This lifelong learning should be exciting, and something we look
          forward to. It should connect us to our fellow clinicians and remind
          us, as a community, why we practice medicine, not just how. We exist
          not only to change your practice, but to change your mind about what
          truly great education can achieve.
        </span>

        <span>
          If you want to swap CME that merely checks the boxes for a community
          of like-minded people learning, growing, and doing their best work
          together—welcome.You’ve found what you’re looking for.
        </span>

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

import React from 'react';
import './About.scss';
import Article from '../../components/article/Article';
import Footer from '../../components/footer/Footer';
import headshot from '../../images/headshot.jpg';
import AboutMe from '../../documents/AboutMe.md';

const About = () => (
  <div>
    <div className="about-container">
      <Article source={AboutMe} />
    </div>
    <Footer />
  </div>
)

export default About;

import React from 'react';
import Article from '../../components/article/Article';
import Footer from '../../components/footer/Footer';
import AboutMe from '../../documents/posts/AboutMe.md';

const About = () => (
  <div>
    <div className="about-container">
      <Article source={AboutMe} />
    </div>
    <Footer />
  </div>
)

export default About;

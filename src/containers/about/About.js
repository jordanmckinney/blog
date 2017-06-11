import React from 'react';
import './About.css';
import Article from '../../components/article/Article';
import Footer from '../../components/footer/Footer';
// import AboutMe from '../../documents/AboutMe.md';


const input = '# About Me\n\nI am a 4th year Computer Science student at UVIC. I am currently on an 8 month co-op at Bambora in Victoria.\nMy main interests are in Machine Learning, AI and Blockchain technology.'

const About = () => (
  <div>
    <div className="about-container">
      <Article source={input} />
    </div>
    <Footer />
  </div>
)

export default About;

import React from 'react';
import Header from '../../Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Quote from './components/Quote/Quote';
import TechBanner from './components/TechBanner/TechBanner';
import Projects from './components/ProjectsBanner/ProjectsBanner';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <Quote />
      <TechBanner />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

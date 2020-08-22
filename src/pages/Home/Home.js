import React from 'react';
import { Header, Footer } from '../../components';
import { MainBanner, Quote, TechBanner, ProjectsBanner } from './components';

const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <Quote />
      <TechBanner />
      <ProjectsBanner />
      <Footer />
    </div>
  );
};

export default Home;

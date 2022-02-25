import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Hero from '../../components/Hero'
import How from '../../components/How'
import AppStore from '../../components/AppStore';
import Products from '../../components/Products';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <How />
      <AppStore />
      <Products />
      <ContactUs />
      <Footer />
    </Container>
  );
}

export default Home;
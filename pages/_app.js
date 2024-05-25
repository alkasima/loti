import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
      
    </>
  );
}

export default MyApp;

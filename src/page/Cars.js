import Navbar from '../components/Navbar/Navbar';
import MulaiSewa from '../components/About/MulaiSewa';
import FormFilter from '../components/CarFilter/FormFilter';
import Footer from '../components/Footer/Footer';
import React from 'react';

function Cars() {
  return (
    <>
      <Navbar />
      <MulaiSewa />
      <FormFilter />
      <Footer />
    </>
  );
}

export default Cars;

import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className='containerMobile'>
      <div className='flex justify-center items-center flex-col text-4xl space-y-4'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default Root;
import React from 'react';

import { AppProps } from 'next/app';

import Header from '@Components/header';
import Footer from '@Components/footer';
const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
};

export default Layout;

import React from 'react';

import { AppProps } from 'next/app';

import Header from '@Components/header';

const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default Layout;

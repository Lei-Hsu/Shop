import React from 'react';

import Head from 'next/head';

import Header from '@Components/header';

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
    </div>
  );
}

export default Home;

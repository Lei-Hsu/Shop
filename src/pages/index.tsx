import React from 'react';

import Head from 'next/head';

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="mb-2 text-2xl">Next.js Template</h1>
        <div className="text-pumpkin">1. Next.js</div>
        <div className="text-yale-blue">2. TypeScript</div>
        <div>3. Redux toolkit and Saga</div>
        <div>4. Tailwind Css</div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Footer from '@Components/footer';
import Header from '@Components/header';

const Layout = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const HeaderArea = () => {
    const hiddenHeaderPage: string[] = ['']; // 如果有要隱藏 header 的頁面就把 router 加進來，例如：'/productList'
    const isHiddenHeader: boolean = hiddenHeaderPage.includes(router.pathname);

    return isHiddenHeader ? <></> : <Header />;
  };

  const FooterArea = () => {
    const hiddenFooterPage: string[] = ['']; // 如果有要隱藏 footer 的頁面就把 router 加進來，例如：'/productList'
    const isHiddenFooter: boolean = hiddenFooterPage.includes(router.pathname);

    return isHiddenFooter ? <></> : <Footer />;
  };

  return (
    <div>
      <HeaderArea />
      <Component {...pageProps} />
      <FooterArea />
    </div>
  );
};

export default Layout;

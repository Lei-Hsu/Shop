import { Provider } from 'react-redux';

import Layout from '@Components/layout';

import store from '@Redux/store';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout pageProps={pageProps} Component={Component} router={undefined} />
    </Provider>
  );
}

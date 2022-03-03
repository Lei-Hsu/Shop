import { Provider } from 'react-redux';

import store from '@Redux/store';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

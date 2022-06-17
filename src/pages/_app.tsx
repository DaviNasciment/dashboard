import { AppProps } from 'next/app'
import { AppWrapper } from '../context/state';
import { AddCardProvider } from '../context/addContext';

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AddCardProvider>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </AddCardProvider>
  )
}

export default MyApp
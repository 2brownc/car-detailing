import '../styles/globals.css'
import "@fontsource/passion-one/700.css"

import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
      <Head>
        <title>PK DETAILING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp

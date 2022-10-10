import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Breadcrumbs from '../components/Breadcrumbs';
import Head from 'next/head';
import ReviewProvider from '../data/ReviewsProvides';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log('router', router);
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Strona główna</title>
      </Head>
      <Breadcrumbs />
      <ReviewProvider>
        <Component {...pageProps} />
      </ReviewProvider>

      {!isHomePage && (
        <button type='button' onClick={() => router.back()}>
          Powrót
        </button>
      )}
    </>
  );
}

export default MyApp;

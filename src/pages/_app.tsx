import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Breadcrumbs from '../components/Breadcrumbs';
import Head from 'next/head';
import Link from 'next/link';
import ReviewProvider from '../data/ReviewsProvides';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Zadanie testowe -
          {/**
           * TODO: Dodaj tytuł aktualnej strony
           */}
        </title>
      </Head>
      <Breadcrumbs />
      <ReviewProvider>
        <Component {...pageProps} />
      </ReviewProvider>

      {/**
       * TODO: powrót do poprzedniej strony jeśli nie jesteśmy aktualnie na stronie głównej
       */}
      <Link href='/'>Powrót</Link>
    </>
  );
}

export default MyApp;

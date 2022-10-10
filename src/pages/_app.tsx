import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Breadcrumbs from '../components/Breadcrumbs';
import Head from 'next/head';
import Link from 'next/link';
import ReviewProvider from '../data/ReviewsProvides';
import { useRouter } from 'next/router';

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

      {/**
       * TODO: powrót do poprzedniej strony jeśli nie jesteśmy aktualnie na stronie głównej
       */}
      {!isHomePage && (
        <button type='button' onClick={() => router.back()}>
          Powrót
        </button>
      )}
    </>
  );
}

export default MyApp;

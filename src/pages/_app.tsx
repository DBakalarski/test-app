import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Breadcrumbs from '../components/Breadcrumbs';
import Head from 'next/head';
import ReviewProvider from '../data/ReviewsProvides';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log('router', router);
  const isHomePage = router.pathname === '/';

  return (
    <ChakraProvider>
      <Head>
        <title>Home Page</title>
      </Head>
      <Container maxW='1200px'>
        <Breadcrumbs />
        <ReviewProvider>
          <Component {...pageProps} />
        </ReviewProvider>
        {!isHomePage && (
          <Button
            colorScheme='teal'
            variant='solid'
            onClick={() => router.back()}
          >
            Back
          </Button>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;

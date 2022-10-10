import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useMovie } from '../../actions';
import { ReviewsContext } from '../../data/ReviewsProvides';
import Form from '../../components/Form/Form';
import { ReviewType } from '../../types';
import Reviews from '../../components/Review/Reviews';
import Head from 'next/head';

const Movie: NextPage = () => {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <div> is Loading</div>;
  }

  const { moviesReviews } = useContext(ReviewsContext);
  const movie = useMovie();
  const filteredReviews = moviesReviews?.filter((item) => item.id === query.id);

  return (
    <>
      <Head>
        <title>Movies | {movie?.title}</title>
      </Head>

      <div>
        {movie && (
          <>
            <h3>Film: {movie.title}</h3>
            <p>{movie.opening_crawl}</p>
            <Reviews reviews={filteredReviews} />
            <Form type={ReviewType.MOVIE} />
          </>
        )}
      </div>
    </>
  );

  return null;
};

export default Movie;

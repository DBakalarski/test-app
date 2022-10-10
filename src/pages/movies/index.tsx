import type { NextPage } from 'next';
import Link from 'next/link';
import { useMovies, getUrlID } from '../../actions';
import Head from 'next/head';

const Movies: NextPage = () => {
  const movies = useMovies();

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>

      <div>
        <h3>Filmy</h3>
        <ul>
          {movies &&
            movies.map((movie, i) => {
              return (
                <li key={i}>
                  <Link href={`/movies/${getUrlID(movie.url)}`}>
                    {movie.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Movies;

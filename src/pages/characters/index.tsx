import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMovies, getUrlID, useCharacters } from '../../actions';

const Characters: NextPage = () => {
  const characters = useCharacters();

  return (
    <>
      <Head>
        <title>Characters </title>
      </Head>

      <div>
        <h3>Postacie</h3>
        <ul>
          {characters &&
            characters.map((character, i) => {
              /**
               * TODO: fix key value
               */
              return (
                <li key={i}>
                  <Link href={`/characters/${getUrlID(character.url)}`}>
                    {character.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Characters;

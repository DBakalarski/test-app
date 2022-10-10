import type { NextPage } from 'next';
import Link from 'next/link';
import { useMovies, getUrlID, useCharacters } from '../../actions';

const Characters: NextPage = () => {
  const characters = useCharacters();

  return (
    <div>
      <h3>Postacie</h3>
      <ul>
        {characters &&
          characters.map((character) => {
            return (
              <li key={character.url}>
                <Link href={`/characters/${getUrlID(character.url)}`}>
                  {character.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Characters;

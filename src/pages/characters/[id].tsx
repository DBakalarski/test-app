import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useCharacter } from '../../actions';
import Form from '../../components/Form/Form';
import Reviews from '../../components/Review/Reviews';
import { ReviewsContext } from '../../data/ReviewsProvides';
import { ReviewType } from '../../types';

const Character: NextPage = () => {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <div> is Loading</div>;
  }

  const character = useCharacter(query.id);

  const { characterReviews } = useContext(ReviewsContext);

  const filteredReviews = characterReviews?.filter(
    (item) => item.id === query.id
  );

  return (
    <>
      <Head>
        <title>Characters | {character?.name}</title>
      </Head>

      <div>
        {character && (
          <div>
            <h3>Postać: {character.name}</h3>
            <h3>Recenzje</h3>
            <ul>
              <Reviews reviews={filteredReviews} />
            </ul>
            <Form type={ReviewType.CHARACTER} />
          </div>
        )}
      </div>
    </>
  );

  return null;
};

export default Character;

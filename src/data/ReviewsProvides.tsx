import React, { useState } from 'react';
import { ReviewItem, Reviews, ReviewsInfo, ReviewType } from '../types';

export type ReviewContext = {
  moviesReviews: ReviewsInfo[];
  characterReviews: ReviewsInfo[];
  handleAddMovieReview: (moveId: string, reviewItem: ReviewItem) => void;
  handleAddCharacterReview: (moveId: string, reviewItem: ReviewItem) => void;
};

export const ReviewsContext = React.createContext<ReviewContext>({
  moviesReviews: [],
  characterReviews: [],
  handleAddMovieReview: () => {},
  handleAddCharacterReview: () => {},
});

const ReviewProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [moviesReviews, setMoviesReviews] = useState<ReviewsInfo[]>([]);
  const [characterReviews, setCharacterReviews] = useState<ReviewsInfo[]>([]);

  const handleAddMovieReview = (movieId: string, reviewItem: ReviewItem) => {
    const index = moviesReviews.findIndex((movies) => movies.id === movieId);

    if (index >= 0) {
      const newMoviesReviews = [...moviesReviews];
      newMoviesReviews[index].reviews.push(reviewItem);
      setMoviesReviews([...newMoviesReviews]);
    }

    if (index < 0) {
      const newMoviesReviews = [...moviesReviews];
      newMoviesReviews.push({
        id: movieId,
        reviews: [reviewItem],
      });

      setMoviesReviews([...newMoviesReviews]);
    }
  };

  const handleAddCharacterReview = (
    characterId: string,
    reviewItem: ReviewItem
  ) => {
    const index = characterReviews.findIndex(
      (character) => character.id === characterId
    );

    if (index >= 0) {
      const newCharacterReviews = [...characterReviews];
      newCharacterReviews[index].reviews.push(reviewItem);
      setCharacterReviews([...newCharacterReviews]);
    }

    if (index < 0) {
      const newCharacterReviews = [...characterReviews];
      newCharacterReviews.push({
        id: characterId,
        reviews: [reviewItem],
      });

      setCharacterReviews([...newCharacterReviews]);
    }
  };

  const reviewContext = {
    moviesReviews,
    characterReviews,
    handleAddMovieReview,
    handleAddCharacterReview,
  };
  return (
    <ReviewsContext.Provider value={reviewContext}>
      {props.children}
    </ReviewsContext.Provider>
  );
};

export default ReviewProvider;

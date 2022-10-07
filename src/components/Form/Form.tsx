import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReviewsContext } from '../../data/ReviewsProvides';
import { IFormInput, ReviewType } from '../../types';
import { v4 as uuidv4 } from 'uuid';

type FormProps = {
  type: ReviewType;
};

const Form: React.FC<FormProps> = ({ type }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { handleAddMovieReview, handleAddCharacterReview } =
    useContext(ReviewsContext);
  const { query } = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    const reviewItem = {
      id: uuidv4(),
      text: data.text,
      author: data.author,
    };

    if (type === ReviewType.MOVIE) {
      handleAddMovieReview(query.id as string, reviewItem);
      return;
    }

    if (type === ReviewType.CHARACTER) {
      handleAddCharacterReview(query.id as string, reviewItem);
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Author</label>
      <input {...register('author')} />
      <label>Text</label>
      <input {...register('text')} />
      <input type='submit' />
    </form>
  );
};

export default Form;

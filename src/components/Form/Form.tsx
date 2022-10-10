import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReviewsContext } from '../../data/ReviewsProvides';
import { FormInput, ReviewType } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { StyledForm } from './Form.style';

type FormProps = {
  type: ReviewType;
};

const Form: React.FC<FormProps> = ({ type }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();
  const { handleAddMovieReview, handleAddCharacterReview } =
    useContext(ReviewsContext);
  const { query } = useRouter();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const reviewItem = {
      id: uuidv4(),
      text: data.text,
      author: data.author,
    };

    if (type === ReviewType.MOVIE) {
      handleAddMovieReview(query.id as string, reviewItem);
      reset();
      return;
    }

    if (type === ReviewType.CHARACTER) {
      handleAddCharacterReview(query.id as string, reviewItem);
      reset();
      return;
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.author}>
        <FormLabel htmlFor='author'>Author</FormLabel>
        <Input
          id='name'
          placeholder='name'
          {...register('author', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.author && errors.author.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.text}>
        <FormLabel htmlFor='text'>Opinion</FormLabel>
        <Input
          id='name'
          placeholder='text'
          {...register('text', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.author && errors.author.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </StyledForm>
  );
};

export default Form;

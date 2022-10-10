import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import type { Movie, Character } from './types';

// docs: https://swapi.dev/
const endpoint = 'https://swapi.dev/api';

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const useMovies = () => {
  const [response, setResponse] = useState<Movie[] | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: Movie[] = await axios.get(`${endpoint}/films/`);
        console.log('response', response);

        setResponse(response.data.results);
      } catch (error) {
        console.error('error');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return response;
};

export const useMovie = () => {
  /**
   * TODO: ${endpoint}/films/${id}
   */

  const { query } = useRouter();

  const id = query.id;

  const [response, setResponse] = useState<Movie | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Movie>(`${endpoint}/films/${id}`);
        setResponse(response.data);
      } catch (error) {
        console.error('error');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return response;
};

export const useCharacters = () => {
  const [response, setResponse] = useState<Character[] | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Character[]>(`${endpoint}/people/`);
        console.log('response', response);

        setResponse(response.data.results);
      } catch (error) {
        console.error('error');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return response;
};

export const useCharacter = (id: string | string[] | undefined) => {
  /**
   * TODO: ${endpoint}/people/${id}
   */

  const [response, setResponse] = useState<Character | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: Character = await axios.get(`${endpoint}/people/${id}`);
        setResponse(response.data);
      } catch (error) {
        console.error('error');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return response;
};

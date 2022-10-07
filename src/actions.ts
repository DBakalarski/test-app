import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import type { Movie, Character } from './types';

/**
 * TODO: dodaj typy
 */
async function fetchMethod(...args) {
  const res = await fetch(...args);
  return await res.json();
}

// docs: https://swapi.dev/
const endpoint = 'https://swapi.dev/api';

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const useMovies = () => {
  const [response, setResponse] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    /**
     * TODO: moze da się jakoś lepiej pobierać dane :)
     */
    fetchMethod<{ results: Movie[] }>(`${endpoint}/films/`).then(
      ({ results }) => {
        setResponse(results);
      }
    );
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
        const response: Movie = await axios.get(`${endpoint}/films/${id}`);
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

  /**
   * TODO: ${endpoint}/people
   */
  useEffect(() => {
    /**
     * TODO: moze da się jakoś lepiej pobierać dane :)
     */
    fetchMethod<{ results: Character[] }>(`${endpoint}/people/`).then(
      ({ results }) => {
        setResponse(results);
      }
    );
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

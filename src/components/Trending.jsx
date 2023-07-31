import React, { useEffect, useState } from 'react';
import { fetchImages } from 'api/MovieApi';

export const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const results = await fetchImages();
        setMovies(results);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchTrendingMovies();
  }, []);
  console.log(movies);
  return (
    <ul className="trendingList">
      {movies.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

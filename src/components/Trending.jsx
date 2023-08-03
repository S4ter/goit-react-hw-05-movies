import React, { useEffect, useState } from 'react';
import { fetchImages } from 'api/MovieApi';
import { Link } from 'react-router-dom';
import './Trending.css';

export const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const results = await fetchImages('trending/all/day?');
        setMovies(results.results);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2 className="trending_header">Trending Today:</h2>
      <ul className="trending_list">
        {movies.map(el => (
          <li key={el.id}>
            <Link className="trending_item" to={`/movies/${el.id}`}>
              {el.title || el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

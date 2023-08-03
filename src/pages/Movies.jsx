import { fetchImages } from 'api/MovieApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const handleChange = e => {
    const { value } = e.target;
    setInputSearch(value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (inputSearch.length === 0) {
      setSearchedMovies([]);
      alert('Search input cannot me empty');
    } else {
      try {
        const search = await fetchImages(`search/movie?query=${inputSearch}&`);
        setSearchedMovies(search.results);
        console.log(searchedMovies);
      } catch (error) {}
    }
  };
  return (
    <div className="movies_containter">
      <form className="movies_form" onSubmit={handleSubmit}>
        <input
          className="movies_input"
          type="text"
          name="inputSearch"
          value={inputSearch}
          onChange={handleChange}
          placeholder="Movie title..."
        />
        <button className="movies_button" type="submit">
          Search
        </button>
      </form>
      <ul className="movies_list">
        {searchedMovies.length === 0 ? (
          <p>No reviews</p>
        ) : (
          searchedMovies.map(movie => (
            <li key={movie.id}>
              <Link className="movies_item" to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Movies;

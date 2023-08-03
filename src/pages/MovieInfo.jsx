import { fetchImages } from 'api/MovieApi';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import './MovieInfo.css';

const MovieInfo = () => {
  const params = useParams();
  const { movieId } = params;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const results = await fetchImages(`movie/${movieId}?`);

        setDetails(results);
        console.log(results, `results`);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  const genreNames = details.genres
    ? details.genres.map(genre => genre.name)
    : [];
  return (
    <div className="movieInfo_containter">
      <div className="movieInfo_movie">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
          alt={`poster of a ${details.title || details.name} movie`}
        />
        <div className="movieInfo_details">
          <h2 className="movieInfo_title">{details.title || details.name}</h2>
          <p className="movieInfo_rating">
            User Score: {`${details.vote_average * 10}%`}
          </p>
          <h3>Overview</h3>
          <span>{details.overview}</span>
          <h4>Genres</h4>
          <span>{genreNames.join(', ')}</span>
        </div>
      </div>

      <div className="moreDetails_containter">
        <h3>Additional information:</h3>
        <div className="moreDetails_links">
          <NavLink className="moreDetails_item" to={`/movies/${movieId}/cast`}>
            Cast
          </NavLink>
          <NavLink
            className="moreDetails_item"
            to={`/movies/${movieId}/reviews`}
          >
            Reviews
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieInfo;

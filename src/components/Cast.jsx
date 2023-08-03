import { fetchImages } from 'api/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const params = useParams();
  const { movieId } = params;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const results = await fetchImages(`movie/${movieId}/credits?`);

        console.log(results, `results`);
        setCast(results.cast);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <div className="moreDetails_cast">
      <h2>Cast:</h2>

      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

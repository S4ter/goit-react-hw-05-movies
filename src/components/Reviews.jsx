import { fetchImages } from 'api/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const params = useParams();
  const { movieId } = params;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const results = await fetchImages(`movie/${movieId}/reviews?`);

        console.log(results, `results`);
        setReviews(results.results);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);
  return (
    <div className="moreDetails_reviews">
      <h2>Reviews:</h2>

      <ul>
        {reviews.length === 0 ? (
          <p>No reviews</p>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;

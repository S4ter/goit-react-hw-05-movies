import { Trending } from 'components/Trending';
import { fetchImages } from 'api/MovieApi';

const Home = () => {
  return (
    <div>
      <div>
        <h2 onClick={fetchImages}>Trending Today:</h2>
        <Trending />
      </div>
    </div>
  );
};

export default Home;

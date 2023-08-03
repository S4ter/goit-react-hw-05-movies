import React, { lazy, Suspense } from 'react';
import './App.styles.css';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import MovieCast from 'components/Cast';
import { CommonLayout } from 'components/CommonLayout';
// import Movies from 'pages/Movies';
// import MovieInfo from 'pages/MovieInfo';
// import MovieReviews from 'components/Reviews';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieInfo = lazy(() => import('pages/MovieInfo'));
const MovieCast = lazy(() => import('components/Cast'));
const MovieReviews = lazy(() => import('components/Reviews'));
const App = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
export default App;

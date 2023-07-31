import React from 'react';
import './App.styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { CommonLayout } from 'components/CommonLayout';
import Movies from 'pages/Movies';
import MovieInfo from 'pages/MovieInfo';
// f7559877f1d0830f5dd1b2777f8228a1

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieInfo />} />
      </Route>
    </Routes>
  );
};
export default App;

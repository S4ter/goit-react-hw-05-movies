import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const CommonLayout = () => {
  return (
    <div>
      <header>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

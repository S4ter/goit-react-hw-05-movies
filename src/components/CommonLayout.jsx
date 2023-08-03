import { NavLink, Outlet } from 'react-router-dom';
import './CommonLayout.css';

export const CommonLayout = () => {
  return (
    <div>
      <header className="header">
        <div className="navigation_containter">
          <NavLink className={'navigation_link'} to="/">
            Home
          </NavLink>
          <NavLink className={'navigation_link'} to="/movies">
            Movies
          </NavLink>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

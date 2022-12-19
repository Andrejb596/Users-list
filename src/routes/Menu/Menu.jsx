import { NavLink } from 'react-router-dom';
import { routes } from '../utils/routes';
import { Logo } from '../../components/Logo/Logo';
import './menu.scss';

export const Menu = () => {
  const activeStyle = {
    color: 'darkorchid',
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <Logo>Users list</Logo>
          <ul className="menu">
            <li>
              <NavLink
                to={routes.Users}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.AboutUs}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

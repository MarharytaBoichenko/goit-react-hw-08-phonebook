import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

export const MainNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Contacts
        </NavLink>
      )}
    </>
  );
};

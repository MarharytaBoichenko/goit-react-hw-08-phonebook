import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <NavLink
        to="/register"
        // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Login
      </NavLink>
    </>
  );
};

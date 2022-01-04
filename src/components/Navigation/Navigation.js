import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <Box>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Login
      </NavLink>
    </Box>
  );
};

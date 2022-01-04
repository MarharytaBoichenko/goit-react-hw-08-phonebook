import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { MainNav } from '../MainNav/MainNav';
import { UserMenu } from '../UserMenu/userMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from '../Navigation/Navigation.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            <IconButton>
              <ContactPhoneIcon sx={{ color: 'white' }} />
            </IconButton>
          </NavLink>
          <MainNav />
        </Box>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </Toolbar>
    </AppBar>
  );
};

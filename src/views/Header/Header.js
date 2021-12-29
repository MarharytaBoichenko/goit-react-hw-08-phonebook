import { useSelector } from 'react-redux';
import { Navigation } from '../../components/Navigation/Navigation';
import { MainNav } from '../../components/MainNav/MainNav';
import { UserMenu } from '../../components/UserMenu/userMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <MainNav />
      {/* <UserMenu /> */}
      {/* {!isLoggedIn && <Navigation />} */}
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
};

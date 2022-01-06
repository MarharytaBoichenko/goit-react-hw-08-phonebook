import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const redirect = isLoggedIn && restricted;
  return redirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;

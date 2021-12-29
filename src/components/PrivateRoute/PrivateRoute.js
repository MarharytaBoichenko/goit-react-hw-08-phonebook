import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

////вопрос   -  если  не использовать проп redirectTo  а прямо  в приватном компоненте
//прописать  '/contacts'   по при рефреше  заржается на  старница контактов а   home ^ почему???/

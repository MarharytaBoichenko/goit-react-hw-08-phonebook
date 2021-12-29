import { useSelector, useDispatch } from 'react-redux';
import { getName } from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const name = useSelector(getName);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(operations.logOut());
  };
  return (
    <section>
      <p>Welcome, {name}</p>
      <button type="button" onClick={logOutHandler}>
        LogOut
      </button>
    </section>
  );
};

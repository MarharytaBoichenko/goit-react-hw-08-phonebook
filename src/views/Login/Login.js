import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations';
import { Header } from '../Header/Header';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onLoginSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(operations.logIn({ email, password }));
    ///dispatch    email and password  to  LogIn  operation
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <form onSubmit={onLoginSubmit}>
        <label>
          <input
            type="email"
            value={email}
            placeholder="Enter  your email"
            onChange={onEmailChange}
          ></input>
        </label>
        <label>
          <input
            type="text"
            value={password}
            placeholder="Enter  your password"
            onChange={onPasswordChange}
          ></input>
        </label>
        <button type="submit">LogIn</button>
        <button type="submit">Login with Google</button>
      </form>
    </>
  );
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations';
import { Header } from '../Header/Header';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onNameChange = e => {
    setName(e.target.value);
  };
  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onRegisterHandler = e => {
    e.preventDefault();
    console.log({ name, email, password });
    // const credentials = { name, email, password };
    // dispatch(operations.register(credentials));
    dispatch(operations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <form onSubmit={onRegisterHandler}>
        <label>
          <input
            type="name"
            value={name}
            placeholder="Enter  your name"
            onChange={onNameChange}
          ></input>
        </label>
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
            // pattern="/^[a-z0-9]+/"
            title="Пароль должен состоять из цифр и латинских букв верхнего и нижнего регистра"
          ></input>
        </label>
        <button type="submit">Register</button>
        <button type="submit">Login with Google</button>
      </form>
    </>
  );
};

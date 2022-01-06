import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container, Typography } from '@mui/material';
import s from './Register.module.css';
import operations from 'redux/auth/auth-operations';
import { Header } from 'components/Header/Header';

const Register = () => {
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
      <Container
        maxWidth="sm"
        sx={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="p" fontWeight="500">
          Sign up to begin
        </Typography>

        <form onSubmit={onRegisterHandler} className={s.form}>
          <TextField
            fullWidth
            variant="outlined"
            required
            type="name"
            value={name}
            placeholder="Enter  your name"
            onChange={onNameChange}
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            variant="outlined"
            required
            type="email"
            value={email}
            placeholder="Enter  your email"
            onChange={onEmailChange}
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            variant="outlined"
            required
            type="password"
            value={password}
            placeholder="Enter  your password"
            onChange={onPasswordChange}
            size="small"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ width: 130 }}
          >
            Register
          </Button>
          {/* <button type="submit">Login with Google</button> */}
        </form>
      </Container>
    </>
  );
};

export default Register;

import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';
import { getName } from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const name = useSelector(getName);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(operations.logOut());
  };
  return (
    <Box component="section" sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ mr: '10px' }}>Welcome, {name}</Typography>
      <Button
        type="button"
        onClick={logOutHandler}
        variant="contained"
        size="small"
        sx={{ width: 100, backgroundColor: 'white', color: '#1976d2' }}
      >
        LogOut
      </Button>
    </Box>
  );
};

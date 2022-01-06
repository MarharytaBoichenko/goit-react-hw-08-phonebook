import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TextField, Typography, Box } from '@mui/material';
import { changeFilter } from 'redux/contacts/actions';
const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box sx={{ width: '350px' }}>
      <Typography variant="body1" component="p">
        Find contacts by name
      </Typography>
      <TextField
        variant="outlined"
        onChange={filterHandler}
        type="text"
        name="filter"
        size="small"
        margin="dense"
        fullWidth
      />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { Filter };

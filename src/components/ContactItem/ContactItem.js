import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Typography, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContacts } from 'redux/contacts/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>{`${name}:`}</Typography>
      <Typography sx={{ ml: '15px' }}>{number}</Typography>
      <Button
        endIcon={<DeleteIcon />}
        onClick={() => {
          deleteContact(id);
        }}
        variant="contained"
        size="small"
        sx={{ width: 90, ml: '15px' }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export { ContactItem };

///

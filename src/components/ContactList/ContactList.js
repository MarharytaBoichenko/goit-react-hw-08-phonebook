import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { List } from '@mui/material';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <List sx={{ width: '350px' }}>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export { ContactList };

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Typography } from '@mui/material';
import { addContacts, replaceContacts } from 'redux/contacts/operations';

import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => {
    return state.contacts;
  });
  const dispatch = useDispatch();

  const nameHandler = e => {
    setName(e.target.value);
  };
  const numberHandler = e => {
    setNumber(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const nameInContact = name.toLowerCase().trim();
    const isInContact = contacts.find(
      cont => cont.name.toLowerCase().trim() === nameInContact,
    );

    ////наверно  костыли))

    const idInContacts = contacts
      .filter(cont => cont.name.toLowerCase().trim() === nameInContact)
      .map(cont => cont.id);
    console.log(idInContacts[0]);
    const id = idInContacts[0];

    if (isInContact) {
      const needToReplace = window.confirm(
        `${name} is already in contact,  do  you want to  replace ?`,
      );
      if (needToReplace) {
        console.log('patch');
        dispatch(replaceContacts({ id, name, number }));
        reset();
      }
      return;
    }
    console.log('add');
    dispatch(addContacts({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleOnSubmit} className={s.form}>
      <Typography> Name</Typography>
      <TextField
        fullWidth
        autoComplete="off"
        variant="outlined"
        required
        type="name"
        value={name}
        onChange={nameHandler}
        size="small"
        margin="normal"
      />

      <Typography> Number</Typography>
      <TextField
        fullWidth
        autoComplete="off"
        variant="outlined"
        type="tel"
        value={number}
        onChange={numberHandler}
        inputProps={{
          pattern:
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          title:
            'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
        }}
        required
        size="small"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        sx={{ width: 130 }}
      >
        Add contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { ContactForm };

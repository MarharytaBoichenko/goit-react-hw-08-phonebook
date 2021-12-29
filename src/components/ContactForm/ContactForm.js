import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, replaceContacts } from '../../redux/operations';

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
      <label className={s.inputLabel}>
        <span className={s.label}> Name</span>
        <input
          onChange={nameHandler}
          type="name"
          // name="name"
          value={name}
          className={s.nameInput}
          required
        ></input>
      </label>
      <label className={s.inputLabel}>
        <span className={s.label}> Number</span>
        <input
          type="tel"
          // name="number"
          value={number}
          onChange={numberHandler}
          className={s.nameInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { ContactForm };

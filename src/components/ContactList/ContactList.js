import PropTypes from "prop-types";
import { useEffect } from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getContacts,
  getFilter,
  getVisibleContacts,
} from "../../redux/selectors";
import { fetchContacts } from "../../redux/operations";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);
  console.log(visibleContacts);

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <ContactItem name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export { ContactList };

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/operations";
import s from "./ContactItem.module.css";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  return (
    <div className={s.contactItem}>
      <p className={s.contactName}> {`${name}:`}</p>{" "}
      <p className={s.contactNumber}> {number}</p>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export { ContactItem };

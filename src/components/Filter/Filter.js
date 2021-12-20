import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/actions";
import s from "./Filter.module.css";
const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label className={s.inputLabel}>
        <span className={s.label}>Find contacts by name</span>
        <input
          onChange={filterHandler}
          type="text"
          name="filter"
          // value={value}
          className={s.filterInput}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { Filter };

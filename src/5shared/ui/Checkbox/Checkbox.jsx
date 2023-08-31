import { PropTypes } from "prop-types";
import checkbox from "./checbox.module.scss";

export function Checkbox({ handleClick, status }) {
  let finalClass;
  status
    ? (finalClass = checkbox.check + " " + checkbox.checked)
    : (finalClass = checkbox.check);

  return (
    <span className={finalClass} onClick={handleClick}>
      {" "}
      &#10004;
    </span>
  );
}

Checkbox.propTypes = {
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

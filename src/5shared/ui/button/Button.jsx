import { PropTypes } from "prop-types";

export function Button({ children, type, className, id, onClick }) {
  return (
    <button type={type} className={className} id={id} onClick={onClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: "button",
  className: null,
  id: null,
  children: "Добавить",
  onClick: null,
};

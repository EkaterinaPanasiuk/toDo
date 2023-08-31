import { PropTypes } from "prop-types";

export function Input({
  autoFocus,
  placeholder,
  type,
  className,
  id,
  onChange,
  value,
  upperChildren,
  downChildren,
}) {
  return (
    <label>
      {upperChildren}
      <input
        autoFocus={autoFocus}
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
      />
      {downChildren}
    </label>
  );
}
Input.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  upperChildren: PropTypes.string,
  downChildren: PropTypes.string,
};
Input.defaultProps = {
  autoFocus: true,
  className: null,
  type: "text",
  placeholder: null,
  id: null,
  onChange: null,
  upperChildren: null,
  downChildren: null,
};

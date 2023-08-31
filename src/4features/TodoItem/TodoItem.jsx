import { Button } from "../../5shared/ui/Button/Button";
import { useId } from "react";
import { PropTypes } from "prop-types";
import { Checkbox } from "../../5shared/ui/Checkbox/Checkbox";
import item from "./item.module.scss";

export function TodoItem({
  className,
  children,
  needCheckbox,
  status,
  handleDelete,
  handleCheck,
}) {
  const innerId = useId();
  let finalClass;
  status
    ? (finalClass = item[className])
    : (finalClass = item[className] + " " + item.checked);
  return (
    <li className={finalClass} id={innerId} status={status}>
      <div>
        {needCheckbox && <Checkbox handleClick={handleCheck} status={status} />}
        <p>{children}</p>
      </div>
      <Button
        type="button"
        className={item.btnDelete}
        id="null"
        children="&#10006;"
        onClick={handleDelete}
      />
    </li>
  );
}
TodoItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  needCheckbox: PropTypes.bool,
  status: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleCheck: PropTypes.func,
};
TodoItem.defaultProps = {
  className: "listItem",
  children: null,
  needCheckbox: false,
  status: true,
  handleDelete: null,
  handleCheck: null,
};

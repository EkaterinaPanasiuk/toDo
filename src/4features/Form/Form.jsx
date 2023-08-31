import { Button } from "../../5shared/ui/Button/Button";
import { Input } from "../../5shared/ui/Input/Input";
import { PropTypes } from "prop-types";
import form from "./form.module.scss";

export function Form({
  placeholder,
  addItem,
  handleText,
  text,
  upperChildren,
}) {
  return (
    <form className={form.formTodo} onSubmit={addItem}>
      <Input
        upperChildren={upperChildren}
        autoFocus={true}
        value={text}
        className={form.inputTodo}
        placeholder={placeholder}
        onChange={handleText}
      />
      <Button
        className={form.btnAddTodo}
        type="submit" /* onClick={addItem} */
      />
    </form>
  );
}

Form.prototypes = {
  upperChildren: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  addItem: PropTypes.func,
  handleText: PropTypes.func,
};
Form.defaultProps = {
  upperChildren: null,
  placeholder: null,
  addItem: null,
  handleText: null,
  text: null,
};

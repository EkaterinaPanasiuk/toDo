import { InputTodo } from "../../3widgets/InputTodo/InputTodo";
import { TodoList } from "../../3widgets/TodoList/TodoList";
import styles from "./styles.module.scss";

export function MainPage() {
  return (
    <>
      <div className={styles.inputSection}>
        <InputTodo />
      </div>
      <div className={styles.listSection}>
        <TodoList />
      </div>
    </>
  );
}

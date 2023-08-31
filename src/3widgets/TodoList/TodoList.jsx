import { useEffect, useId } from "react";
import { TodoItem } from "../../4features/TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus, deleteTodo } from "../InputTodo/TodoSlice";

export function TodoList() {
  const innerId = useId();
  console.log(innerId);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoArr.todoArr);
  // сохраняем записи в localStorage  в объект todoList
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(data));
  }, [data]);

  const listItems = data.map((item) => {
    return (
      <TodoItem
        key={item.text}
        className="todoItem"
        children={item.text}
        needCheckbox={true}
        status={item.status}
        handleDelete={() => {
          dispatch(deleteTodo({ item }));
        }}
        handleCheck={() => {
          dispatch(toggleStatus({ item }));
        }}
      />
    );
  });

  return <ul>{listItems}</ul>;
}

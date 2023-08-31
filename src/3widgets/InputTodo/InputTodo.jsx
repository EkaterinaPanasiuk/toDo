import { Form } from "../../4features/Form/Form";
import { useDispatch } from "react-redux";
import { add } from "./TodoSlice";
import { useState } from "react";
import style from "./style.module.scss";

export function InputTodo() {
  const [text, setText] = useState("");
  function handleText(e) {
    setText(e.target.value);
  }
  const dispatch = useDispatch();

  function addTodo() {
    setText("");
    dispatch(add({ text }));
  }

  return (
    <>
      <h2 className={style.title}>Добавьте ваше задание </h2>
      <Form
        text={text}
        placeholder="Введите задание"
        handleText={handleText}
        addItem={addTodo}
      />
    </>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addproduct } from "./ProductSlice";
import { Form } from "../../4features/Form/Form";
import styles from "./styles.module.scss";

export function InputProducts() {
  const [text, setText] = useState("");
  function handleText(e) {
    setText(e.target.value);
  }
  const dispatch = useDispatch();

  function addTodo() {
    setText("");
    dispatch(addproduct({ text }));
  }

  return (
    <>
      <h1 className={styles.title}>Добавьте ваш продукт</h1>
      <Form
        text={text}
        placeholder="Введите продукт"
        handleText={handleText}
        addItem={addTodo}
      />
    </>
  );
}

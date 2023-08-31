import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProductList } from "../../3widgets/InputProducts/ProductSlice";

export function ProductTemplateList() {
  const data = useSelector((state) => state.productArr.template);
  useEffect(() => {
    localStorage.setItem("template", JSON.stringify(data));
  }, [data]);

  const dispatch = useDispatch();
  function handleClick(e) {
    console.log(e.target);
    const text = e.target.innerText;
    dispatch(updateProductList({ text }));

    //  e.target.classList.toggle(styles.active);
  }

  const arr = data.map((item) => {
    return (
      <li
        id={item.id}
        className={item.status ? styles.active : styles.item}
        key={item.id}
        onClick={handleClick}
      >
        {item.text}
      </li>
    );
  });

  return <ul className={styles.list}>{arr}</ul>;
}

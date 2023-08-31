import { TodoItem } from "../../4features/TodoItem/TodoItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct } from "../InputProducts/ProductSlice";
export function ProductList() {
  const products = useSelector((state) => state.productArr.products);
  // запись массива продуктов в  localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  const dispatch = useDispatch();
  const productArr = products.map((item) => {
    return (
      <TodoItem
        key={item.text}
        className="productItem"
        children={item.text}
        needCheckbox={false}
        status={item.status}
        handleDelete={() => dispatch(deleteproduct({ item }))}
        handleCheck={null}
      />
    );
  });
  return <ul>{productArr}</ul>;
}

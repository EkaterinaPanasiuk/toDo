import { useSelector } from "react-redux";

export function useLocalstorage(name, store) {
  const data = useSelector((state) => state[store]);
  localStorage.setItem(`${name}`, JSON.stringify(data));
  return;
}

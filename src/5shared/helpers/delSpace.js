export function delSpace(arg) {
  const arr = Array.from(arg.trim());
  const newarr = arr.filter((item) => {
    return item !== " ";
  });
  return newarr.join("");
}

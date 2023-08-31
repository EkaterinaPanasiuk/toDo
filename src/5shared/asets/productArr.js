export const productArr = [
  "яблоки",
  "бананы",
  "молоко",
  "кефир",
  "сметана",
  "хлеб",
  "масло",
  "конфеты",
  "огурцы",
  "кофе",
  "сахар",
  "средства личной гигиены",
  "шоколад",
  "чай",
  "колбаса",
  "курица",
];
productArr.sort();
function createObj(arr) {
  const newArr = arr.map((item, index) => {
    const obj = { text: item, id: item + index, status: false };
    return obj;
  });
  return newArr;
}
createObj(productArr);

const productArrObj = [
  { text: "бананы", id: "бананы0", status: false },
  { text: "кефир", id: "кефир1", status: false },
  { text: "колбаса", id: "колбаса2", status: false },
  { text: "конфеты", id: "конфеты3", status: false },
  { text: "кофе", id: "кофе4", status: false },
  { text: "курица", id: "курица5", status: false },
  { text: "масло", id: "масло6", status: false },
  { text: "молоко", id: "молоко7", status: false },
  { text: "огурцы", id: "огурцы8", status: false },
  { text: "сахар", id: "сахар9", status: false },
  { text: "сметана", id: "сметана10", status: false },
  {
    text: "средства личной гигиены",
    id: "средства личной гигиены11",
    status: false,
  },
  { text: "хлеб", id: "хлеб12", status: false },
  { text: "чай", id: "чай13", status: false },
  { text: "шоколад", id: "шоколад14", status: false },
  { text: "яблоки", id: "яблоки15", status: false },
];

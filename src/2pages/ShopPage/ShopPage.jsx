import { InputProducts } from "../../3widgets/InputProducts/InputProducts";
import { ProductList } from "../../3widgets/ProductsList/ProductsList";
import { ProductTemplateList } from "../../4features/ProductTemplateList/ProductTemplateList";

export function ShopPage() {
  return (
    <>
      <InputProducts />
      <ProductList />
      <ProductTemplateList />
    </>
  );
}

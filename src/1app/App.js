import { Routes, Route } from "react-router-dom";
import { Layout } from "../2pages/Layout/Layout";
import { MainPage } from "../2pages/MainPage/MainPage";
import { ShopPage } from "../2pages/ShopPage/ShopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { GlobalStyle } from "./styles/GlobalStyle";
import { StyleApp } from "./style";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function loadHamburgueriaData() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadHamburgueriaData();
  });

  return (
    <StyleApp>
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <section>
        <ProductsList products={products} filteredProducts={filteredProducts} />
        <Cart />
      </section>
      <GlobalStyle />
    </StyleApp>
  );
}

export default App;

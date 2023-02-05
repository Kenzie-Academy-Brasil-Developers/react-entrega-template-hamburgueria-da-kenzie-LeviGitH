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
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
  const handleClick = (event) => {
    if (currentSale.some((element) => element == event.target.id)) {
      console.log("Já existe");
    } else {
      const price = Number(event.target.attributes.price.value);
      setCurrentSale((oldArray) => [...oldArray, event.target.id]);
      setCartTotal(cartTotal + price);
      console.log(cartTotal);
    }
  };

  return (
    <StyleApp>
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        cartTotal={cartTotal}
      />
      <section>
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart products={products} currentSale={currentSale} />
      </section>
      <GlobalStyle />
    </StyleApp>
  );
}

export default App;

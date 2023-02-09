import { GlobalStyle } from "./styles/GlobalStyle";
import { StyleApp } from "./style";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

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
      toast.error("Produto já está no carrinho!");
    } else {
      setCurrentSale((oldArray) => [...oldArray, event.target.id]);
    }
  };

  return (
    <StyleApp>
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <section>
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </section>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </StyleApp>
  );
}

export default App;

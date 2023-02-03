import { GlobalStyle } from "./styles/GlobalStyle";
import { StyleApp } from "./style";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  return (
    <StyleApp>
      <Header />
      <section>
        <ProductsList />
        <Cart />
      </section>
      <GlobalStyle />
    </StyleApp>
  );
}

export default App;

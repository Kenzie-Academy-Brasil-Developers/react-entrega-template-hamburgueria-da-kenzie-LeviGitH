import { Resets } from "./styles/resets";
import { Styleguide } from "./styles/styleguide";

import { Header } from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header></Header>
      <section>
        <ProductsList />
        <Cart />
      </section>
      <Resets />
      <Styleguide />
    </>
  );
}

export default App;

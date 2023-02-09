import React from "react";
import { StyleCart } from "./style";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

const Cart = ({ products, currentSale, setCurrentSale }) => {
  const cartProducts = products.filter((product) => {
    if (currentSale.length > 0) {
      return currentSale.includes("" + product.id);
    }
  });
  const cartValues = cartProducts.map((product) => {
    return product.price;
  });
  return (
    <StyleCart>
      <header>
        <h1>Carrinho de compras</h1>
      </header>
      {currentSale.length > 0 ? (
        <div>
          <section className="fullCart">
            {cartProducts.map((product, index) => {
              return (
                <CartProduct
                  key={index}
                  product={product}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                />
              );
            })}
          </section>
          <CartTotal cartValues={cartValues} setCurrentSale={setCurrentSale} />
        </div>
      ) : (
        <div className="emptyCart">
          <h2>Sua sacola está vazia</h2>
          <span>Adicione itens</span>
        </div>
      )}
    </StyleCart>
  );
};

export default Cart;

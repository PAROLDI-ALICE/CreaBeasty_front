import React from "react";
import PropTypes from "prop-types";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = ({ items, total, currency, removeFromCart }) => {
  return (
    <div>
      <h2>Mon panier</h2>

      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart__body">
                {items.map((item) => (
                  <ShoppingCartItem
                    key={item.id}
                    {...item}
                    onClick={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            )}
            {items.length === 0 && (
              <div className="alert alert-info">Le panier est vide.</div>
            )}
            <div className="cart__total">
              Total: {total} {currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;

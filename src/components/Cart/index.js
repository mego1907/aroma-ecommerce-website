import React, {useState, useEffect} from 'react';
import {
  CartSec,
  CartContainer,
  CartTitle,
  CartProducts,
  ProductTitle,
  Name,
  Price,
  Quntity,
  Total,
  CartBottom,
  ClearBtn,
  CartEmpty,
} from "./Cart.elements";
// import CartProduct Component from CartProduct
import CartProduct from './CartProduct';

import emptyImg from '../../assets/images/Cart__empty.jpg'

import {useSelector, useDispatch} from 'react-redux'
import {clearCart} from '../../Redux/shopping/shoppingActions'

const Cart = () => {
  const cart = useSelector(state => state.shop.cart)
  const dispatch = useDispatch()

  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.price * item.qty;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);


  if (cart.length === 0) {
    return (
      <CartSec>
        <CartContainer>
          <CartTitle>
            <h2>Your Cart</h2>
          </CartTitle>
          <CartEmpty>
            <img src={emptyImg} alt=""/>
          </CartEmpty>
        </CartContainer>
      </CartSec>
    );
  }

  return (
    <CartSec>
      <CartContainer>
        <CartTitle>
          <h2>Your Cart</h2>
        </CartTitle>
        <ProductTitle>
          <Name>Product</Name>
          <Price>Price</Price>
          <Quntity>Quantity</Quntity>
          <Total>Total</Total>
        </ProductTitle>
        <CartProducts>
          {/* Cart Product Component */}
          {cart.map((item) => (
            <CartProduct key={item.id} {...item} />
          ))}
        </CartProducts>
        <CartBottom>
          <h4>Total:</h4>
          <h4>{totalPrice}$</h4>
        </CartBottom>
        <ClearBtn type="button" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </ClearBtn>
      </CartContainer>
    </CartSec>
  );
}

export default Cart;

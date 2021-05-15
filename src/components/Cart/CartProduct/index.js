import React, {useState} from 'react'
import {
  ProductInCart,
  CartProdName,
  CartProdPrice,
  CartProdQty,
  CartProdTotal,
  ImgContainer,
  CartDeleteBtn,
  DeleteBtn,
} from "./CartProduct.elements";

import {useDispatch}  from 'react-redux';
import {removeFromCart, addJustItemQty} from '../../../Redux/shopping/shoppingActions'

const CartProduct = ({img, name, price, qty, id}) => {
  const dispatch = useDispatch()

  const [input, setInput] = useState(qty)

  const onChangeHandler = (e) => {
    setInput(e.target.value)

    dispatch(addJustItemQty(id, e.target.value))
  } 

  return (
    <ProductInCart>
      <CartProdName>
        <ImgContainer>
          <img src={img} alt={name} />
        </ImgContainer>
        <h3>{name}</h3>
      </CartProdName>
      <CartProdPrice>
        <p>{price}</p>
      </CartProdPrice>
      <CartProdQty>
        <input
          type="number"
          name="qty"
          min="1"
          value={input}
          onChange={onChangeHandler}
        />
      </CartProdQty>
      <CartProdTotal>
        <p>{qty * price}</p>
      </CartProdTotal>
      <CartDeleteBtn onClick={() => dispatch(removeFromCart(id))}>
        <DeleteBtn />
      </CartDeleteBtn>
    </ProductInCart>
  );
}

export default CartProduct

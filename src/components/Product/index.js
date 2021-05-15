import React from 'react'
import {
  TrProduct,
  TrImg,
  TrDesc,
  ProductType,
  ProductTitle,
  ProductPrice,
  Buttons,
  AddBtn,
  DetailsBtn,
} from "./Product.elements";

import {addToCart, loadCurrentItem} from '../../Redux/shopping/shoppingActions'

import {useDispatch} from 'react-redux'

const Product = ({product}) => {
  const dispatch = useDispatch()

  return (
    <TrProduct>
      <TrImg src={product.img} alt={product.name} />
      <TrDesc>
        <ProductType>{product.type}</ProductType>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
        <Buttons>
          <AddBtn type="button" onClick={() => dispatch(addToCart(product.id))}>Add To Cart</AddBtn>
          <DetailsBtn onClick={() => dispatch(loadCurrentItem(product))} to={`/shop/${product.id}`} >Details</DetailsBtn>
        </Buttons>
      </TrDesc>
    </TrProduct>
  );
}

export default Product;

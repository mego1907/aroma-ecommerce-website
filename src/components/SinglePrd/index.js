import React from 'react'
import {
  SinglePrdSec,
  SinglePrdContainer,
  Prd,
  Img,
  PrdInfo,
  PrdTitle,
  PrdPrice,
  Category,
  Desc,
  Button,
} from "./SinglePrd.elements";

import {addToCart} from "../../Redux/shopping/shoppingActions";
import {useSelector, useDispatch} from 'react-redux'

const SinglePrd = () => {
  const currentItem = useSelector(state => state.shop.currentItem)
  const dispatch = useDispatch()


  return (
    <SinglePrdSec>
      <SinglePrdContainer>
        <Prd>
          <Img src={currentItem.img} alt={currentItem.name} />
        </Prd>
        <Prd>
          <PrdInfo>
            <PrdTitle>{currentItem.name}</PrdTitle>
            <PrdPrice>{currentItem.price}</PrdPrice>
            <Category>
              <p>Category : {currentItem.type}</p>
              <p>Availibility : In Stock</p>
            </Category>
            <Desc>
              Mill Oil is an innovative oil filled radiator with the most modern
              technology. If you are looking for something that can make your
              interior look awesome, and at the same time give you the pleasant
              warm feeling during the winter.
            </Desc>
              <Button
                type="button"
                onClick={() => dispatch(addToCart(currentItem.id))}
              >
                Add To Cart
              </Button>
          </PrdInfo>
        </Prd>
      </SinglePrdContainer>
    </SinglePrdSec>
  );
}

export default SinglePrd

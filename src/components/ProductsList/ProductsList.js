import React from "react";
import { useDispatch } from "react-redux";
import addProductToCart from "../../Reducers/Cart/CartSlice";

const ProductsList = ({ productsList }) => {
  const dispatch = useDispatch();

  const handleAddOrRemoveProd = (prodId) => {
    const product = productsList.find((prod) => prod.id === prodId);
    dispatch(addProductToCart(product));
    console.log(prodId);
  };

  return (
    <>
      <h2>List of products</h2>
      <div>
        {productsList?.map((prod) => {
          return (
            <div key={prod.id}>
              <h4>{prod.name}</h4>
              <p>PRICE ${prod.price}</p>
              <p>CATEGORY {prod.category}</p>
              <button onClick={() => handleAddOrRemoveProd(prod.id)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;

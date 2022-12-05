import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import { unsetUser } from "../../Reducers/User/userSlice";

const fetchProducts = () => {
  return axios.get("http://localhost:4000/products");
};

const Home = () => {
  const { email, fullName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(unsetUser());
    navigate("/");
  };
  const { data, isLoading } = useQuery("products", fetchProducts, {
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h1>Home</h1>
      <p>WELCOME</p>
      <div>{email}</div>
      <div>{fullName}</div>
      <button onClick={handleClick}>LOG OUT</button>
      <br />
      <ProductsList productsList={data.data} isLoading={isLoading} />
    </div>
  );
};

export default Home;

import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Reducers/User/userSlice";
import { MyH1 } from "./IndexStyles";

const Index = () => {
  const emailField = useRef("");
  const passwordField = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = axios.get("http://localhost:4000/users");
      const users = await res;
      const { data } = users;
      const userToLog = data.find(
        (user) => user.email === emailField.current.value
      );

      if (userToLog) {
        if (userToLog.password === passwordField.current.value) {
          console.log("sesion iniciada");
          dispatch(
            setUser({
              email: userToLog.email,
              fullName: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now(),
            })
          );
        }
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <MyH1>INICIA SESION</MyH1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Adress</label>
          <input type="text" id="email" ref={emailField} />
        </div>
        <div>
          <label htmlFor="password">password Adress</label>
          <input type="text" id="password" ref={passwordField} />
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default Index;

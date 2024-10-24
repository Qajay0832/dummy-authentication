import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginDetails } from "../redux/loginState";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    useEffect(()=>{
        let person=JSON.parse(localStorage.getItem('user'))
        if(!person&&!person){
            alert('Fill Details')
        }
    },[])
    const navigate=useNavigate();
  const dispatch = useDispatch();
  let setLogin = useSelector((state) => state.login.value);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (username.length > 0 && password.length > 0) {
      let user = { username: username, password: password };
      const loginData = await axios.post(
        "https://dummyjson.com/auth/login",
        user,
        { headers: { "Content-Type": "application/json" } }
      );
      if (loginData.data.accessToken) {
        user = {
          username: loginData.data.username,
          password: loginData.data.password,
          accessToken: loginData.data.accessToken,
          firstName: loginData.data.firstName,
          lastName: loginData.data.lastName,
          gender: loginData.data.gender,
          image: loginData.data.image,
          email:loginData.data.email,
          id:loginData.data.id
        };
        dispatch(setLoginDetails(user));
        setUsername("");
        setPassword("");
        console.log(loginData.data);
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/profile')
        
      }
    }
    console.log(setLogin);
  };

  return (
    <div className="loginContainer">
      <label htmlFor="username" className="userLabel">
        Username :
      </label>
      <input
        name="username"
        id="username"
        className="userInput"
        placeholder="enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="password" className="userLabel">
        Password :
      </label>
      <input
        name="password"
        id="password"
        className="userInput"
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <button className="loginBtn" id="loginBtn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

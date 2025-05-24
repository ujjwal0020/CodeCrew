// 

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // import api instance

const Login = () => {
  // your states
  const [emailId, setEmailId] = useState("shikhar@gmail.com");
  const [password, setPassword] = useState("@Shekhuinsta_44");
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { emailId, password });
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/signup", {
        emailId,
        password,
        firstName,
        lastName,
        age,
        gender,
      });
      dispatch(addUser(res.data.data));
      navigate("/feed");
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  // ...rest of your component remains unchanged
};

export default Login;

import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  const handleChange = (updateFn, e) => {
    updateFn(e.target.value);
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => handleChange(setUserName, e)}
        value={userName}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => handleChange(setPassword, e)}
        value={password}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;

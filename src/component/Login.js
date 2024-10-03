import React, { useState } from "react";

function Login() {
  const [state, setState] = useState({
    userName: "",
    passWord: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Enter your username</label>
      <input
        type="text"
        name="userName"
        id="username"
        value={state.userName}
        onChange={handleChange}
      />

      <label htmlFor="password">Enter your password</label>
      <input
        type="password"
        name="passWord"
        id="password"
        value={state.passWord}
        onChange={handleChange}
      />

      <input type="checkbox" />
      <span>is admin</span>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

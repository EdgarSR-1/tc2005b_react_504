import React, { useState } from 'react'

const Login = ({ login }) => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const onsubmit = async (e) => {
        e.preventDefault();
        if (!username) {
          alert("necesitas ingresar un usuario");
          return;
        }
        const isLogin = await login({ username, password });
        if (isLogin == true) {
            navigate("/home");
        }
    };
  return (
    <form onSubmit={onsubmit}>
      <label> Username </label>
      <input 
      type="text" 
      value={username} 
      onChange={(e) => setUsername(e.target.value)} 
      />
      <br />
      <label> Password </label>
      <input 
      type="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login

import React, { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="login-page">
      <div className="form-container">
        <form>
          <h2>Account Login</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="&#xf007;   username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <label htmlFor="password" className="upper">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="&#xf023;   password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;

import React from "react";

function Login() {
  return (
    <form>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"}></input>
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
}

export default Login;

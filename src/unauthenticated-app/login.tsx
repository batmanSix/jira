import { useAuth } from "content/auth-content";
import React, { FormEvent } from "react";
// interface base {
//   id: number
// }
// interface  adc extends base{
//   name: string
// }

// const test = (p:base)=>{

// }

// // 鸭子类型面向接口编程
// const a:adc = {id:1,name:"jack"}
// test(a)
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreens = () => {
  const resgin = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  const { login, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    if (username === "") {
      alert("请输入账号");
      return false;
    }

    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"}></input>
      </div>
      {/* <button type={"submit"}>注册</button> */}

      <button type={"submit"}>登录</button>
    </form>
  );
};

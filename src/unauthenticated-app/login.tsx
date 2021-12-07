import { useAuth } from "content/auth-content";
import React, { FormEvent } from "react";
import { Button, Form, Input } from "antd";
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

  // antd 自己做了类型推断
  const handleSubmit = (values: { username: string; password: string }) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;

    // if (username === "") {
    //   alert("请输入账号");
    //   return false;
    // }

    //login({ username, password });
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        {/* <label htmlFor="username">用户名</label> */}
        <Input placeholder={"用户名"} type="text" id={"username"}></Input>
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        {/* <label htmlFor="password">密码</label> */}
        <Input placeholder="{'密码'}" type="password" id={"password"}></Input>
      </Form.Item>
      {/* <button type={"submit"}>注册</button> */}
      <Form.Item>
        <Button htmlType={"submit"} type={"primary"}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

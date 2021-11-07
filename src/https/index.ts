import { useAuth } from "../content/auth-content";
import * as auth from "auth-provide";
import qs from "qs";
// fetch catch 不会捕获代码异常 axios 和 fetch 的表现不一样，可以补货异常

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bear ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  // 如果为get 方法
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    // 没有则参数为空
    config.body = JSON.stringify(data || {});
  }
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      // 如果为401 代表没有权限
      if (response.status === 401) {
        await auth.loginOut();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

// 自定义hooks Parameters 使用这个函数直接传入范型展示参数 typescript 操作符
export const useHttp = () => {
  const { user } = useAuth();

  // Parameters utility types  Parameters<typeof http> 传入一个其他类型对这个类型进行操作
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

// 联合类型
let mysia: string | number;

// 类型别名 interface 在这种情况下没法替代类型别名，
type finimbyner = string | number;
let resofinimbyner: finimbyner = 6;

// 接口 类型别名在很多情况下可以和 接口互换， 区别：
interface person {
  name: string;
}
// 类型别名
type persons = { name: string };
const xiaoMing: persons = { name: "xiaoMing" };

// typescript utility types 最常用的

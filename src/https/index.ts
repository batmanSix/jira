import { useAuth } from "../content/auth-content";
import * as auth from "auth-provide";
import qs from "qs";
import { config } from "process";
// fetch catch 不会捕获代码异常 axios 和 fetch 的表现不一样，可以补货异常

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }
) => {};

// export const useHttp = ()=>{
//   const {user} = useAuth()
//   return ([endpoint,config]:[string,Config] => http())
// }

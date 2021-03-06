import { User } from "screens/project-list/search-panel";

const localStorageKey = "_auth_provide_token";

// 登录后获取token 凭证
export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handlerUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

const apiUrl = process.env.REACT_APP_API_URL;

export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      return handlerUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      return handlerUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const loginOut = async () =>
  window.localStorage.removeItem(localStorageKey);

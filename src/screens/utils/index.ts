import { useEffect } from "react";
// 在一个函数改变传入对象本身是不好的对象是引用对象

// 判断value是否为0
export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (obj: {
  [x: string]: any;
  name?: string;
  personId?: string;
}) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

// custom hooks 要已 use 开头
export const useMount = (cb: { (): void; (): void }) => {
  useEffect(() => {
    cb();
  }, []);
};

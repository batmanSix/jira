import { Card } from "antd";
import { useState } from "react";
import { LoginScreens } from "./login";
import { RegisterScreen } from "./register";

export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? (
          <LoginScreens></LoginScreens>
        ) : (
          <RegisterScreen></RegisterScreen>
        )}
        <button onClick={() => setIsRegister(!isRegister)}>
          切换{isRegister ? "注册" : "登录"}
        </button>
      </Card>
    </div>
  );
};

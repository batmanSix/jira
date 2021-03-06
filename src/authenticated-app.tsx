import { useAuth } from "content/auth-content";
import * as React from "react";
import { ProjectList } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout}>登出</button>
      <ProjectList></ProjectList>
    </div>
  );
};

import React from "react";
import logo from "./logo.svg";
import { ProjectList } from "./screens/project-list";
import { LoginScreens } from "./screens/login";
import "./App.css";
import { useAuth } from "content/auth-content";
import { AuthenticatedApp } from "authenticated-app";
import { UnAuthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  console.log(user, "@13");
  return (
    <div className="App">
      {user ? (
        <AuthenticatedApp></AuthenticatedApp>
      ) : (
        <UnAuthenticatedApp></UnAuthenticatedApp>
      )}
    </div>
  );
}

export default App;

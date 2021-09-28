import React from "react";
import logo from "./logo.svg";
import { ProjectList } from "./screens/project-list";
import { LoginScreens } from "./screens/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoginScreens></LoginScreens>
    </div>
  );
}

export default App;

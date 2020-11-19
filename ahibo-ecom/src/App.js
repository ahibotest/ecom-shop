import "./App.css";
import React from "react";
import Appheader from "./component/appheader.js";
import Sidebar from "./component/sidebar";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <div className="App">
      <Appheader />
      <div className="body_flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

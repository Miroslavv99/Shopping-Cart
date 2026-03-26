import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <main>
      <MainNavigation />
      <Outlet />
    </main>
  );
}

export default App;

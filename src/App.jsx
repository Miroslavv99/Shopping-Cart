import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <main>
      <MainNavigation />
      <Outlet context={[cart, setCart]} />
    </main>
  );
}

export default App;

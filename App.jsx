import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home";
import Market from "./src/pages/Market";
import WalletPage from "./src/pages/WalletPage";
import Settings from "./src/pages/Settings";

import Navbar from "./src/Navbar";


function App(){

  return (

    <BrowserRouter>


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/market"
          element={<Market />}
        />


        <Route
          path="/wallet"
          element={<WalletPage />}
        />


        <Route
          path="/settings"
          element={<Settings />}
        />


      </Routes>


      <Navbar />


    </BrowserRouter>

  );

}


export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./src/pages/Home";
import Market from "./src/pages/Market";
import WalletPage from "./src/pages/WalletPage";


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


      </Routes>

    </BrowserRouter>

  );

}


export default App;

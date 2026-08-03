import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home";
import Market from "./src/pages/Market";


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


      </Routes>


    </BrowserRouter>

  );

}


export default App;

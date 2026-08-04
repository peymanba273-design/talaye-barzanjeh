import { useState } from "react";

import Login from "./Login.jsx";

import Home from "./src/Home.jsx";
import Navbar from "./Navbar.jsx";



function App(){


  const [logged,setLogged] = useState(false);



  if(!logged){

    return (

      <Login 
      setLogged={setLogged}
      />

    );

  }



  return (

    <div className="app">


      <Home />


      <Navbar />


    </div>

  );

}


export default App;

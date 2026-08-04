import { useState } from "react";

import Login from "./Login.jsx";
import Register from "./Register.jsx";

import Home from "./src/Home.jsx";
import Navbar from "./Navbar.jsx";


function App(){

  const [logged,setLogged] = useState(false);

  const [page,setPage] = useState("login");



  if(!logged){


    if(page==="register"){


      return (

        <Register

        setLogged={setLogged}

        />

      );


    }



    return (

      <Login

      setLogged={setLogged}

      setPage={setPage}

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

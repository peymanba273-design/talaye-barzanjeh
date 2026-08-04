import { useState } from "react";

import Layout from "./Layout.jsx";

import Login from "./Login.jsx";
import Register from "./Register.jsx";

import Home from "./src/Home.jsx";
import Market from "./src/Market.jsx";
import WalletPage from "./src/WalletPage.jsx";
import Profile from "./Profile.jsx";

function App(){

  const [logged,setLogged]=useState(false);

  const [authPage,setAuthPage]=useState("login");

  const [page,setPage]=useState("home");



  if(!logged){

    if(authPage==="register"){

      return(

        <Register

          setLogged={setLogged}

          setAuthPage={setAuthPage}

        />

      );

    }



    return(

      <Login

        setLogged={setLogged}

        setAuthPage={setAuthPage}

      />

    );

  }



  function renderPage(){

    switch(page){

      case "market":

        return <Market />;

      case "wallet":

        return <WalletPage />;

      case "profile":

        return <Profile />;

      default:

        return <Home />;

    }

  }



  return(

    <Layout

      page={page}

      setPage={setPage}

    >

      {renderPage()}

    </Layout>

  );

}

export default App;

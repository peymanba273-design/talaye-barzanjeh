import { useState } from "react";

import Home from "./src/Home.jsx";
import Market from "./src/Market.jsx";
import WalletPage from "./src/WalletPage.jsx";
import Settings from "./src/Settings.jsx";

import Navbar from "./Navbar.jsx";


function App(){

  const [page,setPage] = useState("home");


  function renderPage(){

    if(page==="market"){

      return <Market />;

    }


    if(page==="wallet"){

      return <WalletPage />;

    }


    if(page==="settings"){

      return <Settings />;

    }


    return <Home />;

  }



  return (

    <div className="app">


      {renderPage()}



      <Navbar 
        setPage={setPage}
        page={page}
      />


    </div>

  );

}


export default App;

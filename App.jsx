import { useState } from "react";

import Home from "./Home.jsx";
import Market from "./Market.jsx";
import WalletPage from "./WalletPage.jsx";

import Layout from "../Layout.jsx";


function App(){

  const [page,setPage] = useState("home");


  function renderPage(){

    switch(page){

      case "market":
        return <Market />;


      case "wallet":
        return <WalletPage />;


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

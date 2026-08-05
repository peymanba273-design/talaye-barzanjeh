import { useState } from "react";

import Home from "./Home.jsx";
import Market from "./Market.jsx";
import WalletPage from "./WalletPage.jsx";
import Profile from "./Profile.jsx";
import Transactions from "./Transactions.jsx";
import News from "./News.jsx";
import Notifications from "./Notifications.jsx";

import Layout from "./Layout.jsx";


function App(){

  const [page,setPage]=useState("home");


  function renderPage(){

    switch(page){

      case "market":
        return <Market />;


      case "wallet":
        return <WalletPage />;


      case "profile":
        return <Profile />;


      case "transactions":
        return <Transactions />;


      case "news":
        return <News />;


      case "notifications":
        return <Notifications />;


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

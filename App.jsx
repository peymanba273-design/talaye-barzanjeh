import { useState } from "react";

import Home from "./src/Home.jsx";
import Market from "./src/Market.jsx";
import WalletPage from "./src/WalletPage.jsx";
import Profile from "./Profile.jsx";
import Notifications from "./Notifications.jsx";
import Transactions from "./Transactions.jsx";
import News from "./News.jsx";

import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";


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

      case "notifications":
        return <Notifications />;

      case "transactions":
        return <Transactions />;

      case "news":
        return <News />;

      default:
        return <Home />;

    }

  }


  return(
    <div>

      <Header />

      {renderPage()}

      <Navbar
        page={page}
        setPage={setPage}
      />

    </div>
  );

}


export default App;

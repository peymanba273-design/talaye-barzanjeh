import { useState } from "react";

import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";

import Home from "./src/Home.jsx";
import Market from "./src/Market.jsx";
import WalletPage from "./src/WalletPage.jsx";

import Profile from "./Profile.jsx";
import Notifications from "./Notifications.jsx";
import Transactions from "./Transactions.jsx";
import News from "./News.jsx";


function App() {

  const [page, setPage] = useState("home");


  const pages = {

    home: <Home />,

    market: <Market />,

    wallet: <WalletPage />,

    profile: <Profile />,

    notifications: <Notifications />,

    transactions: <Transactions />,

    news: <News />

  };


  return (

    <div className="app">


      <Header />


      <div className="content">

        {pages[page]}

      </div>


      <Navbar

        page={page}

        setPage={setPage}

      />


    </div>

  );

}


export default App;

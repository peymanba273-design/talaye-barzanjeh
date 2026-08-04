import { useState } from "react";

import Home from "./src/Home.jsx";
import Market from "./src/Market.jsx";
import WalletPage from "./src/WalletPage.jsx";

import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";

import Profile from "./Profile.jsx";
import Notifications from "./Notifications.jsx";
import Transactions from "./Transactions.jsx";
import News from "./News.jsx";

function App() {

  const [page, setPage] = useState("home");

  const renderPage = () => {

    switch (page) {

      case "home":
        return <Home />;

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

  };

  return (

    <div className="app">

      <Header />

      <main>

        {renderPage()}

      </main>

      <Navbar
        page={page}
        setPage={setPage}
      />

    </div>

  );

}

export default App;

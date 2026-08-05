import { useState } from "react";

import Home from "./src/Home.jsx";
import Market from "./src/Market.jsx";
import WalletPage from "./src/WalletPage.jsx";

import Profile from "./Profile.jsx";
import Transactions from "./Transactions.jsx";
import News from "./News.jsx";
import Notifications from "./Notifications.jsx";

import Layout from "./Layout.jsx";

function App() {

  const [page, setPage] = useState("home");

  function renderPage() {

    switch (page) {

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

      case "home":
      default:
        return <Home />;
    }
  }

  return (
    <Layout page={page} setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;

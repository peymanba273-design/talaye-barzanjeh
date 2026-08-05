import Home from "./Home.jsx";
import Market from "./Market.jsx";
import WalletPage from "./WalletPage.jsx";}) {

  return (

    <>

      <Header />

      <main
        style={{
          paddingTop: "95px",
          paddingBottom: "110px"
        }}
      >

        {children}

      </main>

      <Navbar
        page={page}
        setPage={setPage}
      />

    </>

  );

}

export default Layout;

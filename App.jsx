import Header from "./src/Header.jsx";
import Navbar from "./Navbar.jsx";

function Layout({ children, page, setPage }) {

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

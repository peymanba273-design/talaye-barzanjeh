import Header from "./src/Header.jsx";
import Navbar from "./Navbar.jsx";

function Layout({ children, page, setPage }) {

  return (
    <>
      <Header />

      <main
        style={{
          paddingTop: "90px",
          paddingBottom: "95px",
          minHeight: "100vh"
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

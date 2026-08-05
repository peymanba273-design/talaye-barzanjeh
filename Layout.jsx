import Header from "./src/Header.jsx";
import Navbar from "./src/components/Navbar.jsx";


function Layout({children}){

  return(

    <>

      <Header />

      <main>
        {children}
      </main>

      <Navbar />

    </>

  );

}


export default Layout;

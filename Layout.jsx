import Header from "./src/Header.jsx";
import Navbar from "./Navbar.jsx";


function Layout({children,page,setPage}){


  return(

    <>

      <Header />


      <main>

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

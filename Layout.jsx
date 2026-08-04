import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";


function Layout({

  page,

  children,

  setPage

}){


  return(

    <div

    className="app-layout"

    >


      <Header />



      <main

      className="main-content"

      >

        {children}

      </main>



      <Navbar

      page={page}

      setPage={setPage}

      />


    </div>

  );

}


export default Layout;

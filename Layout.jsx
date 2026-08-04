import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";


function Layout({

  page,

  children,

  setPage

}){


  return(

    <div

    style={{

      minHeight:"100vh",

      background:"#090909",

      color:"white",

      display:"flex",

      flexDirection:"column"

    }}

    >


      <Header />



      <main

      style={{

        flex:"1",

        paddingBottom:"90px"

      }}

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

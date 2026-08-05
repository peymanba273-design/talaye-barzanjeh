import Header from "./src/Header.jsx";


function Layout({children}){


  return(

    <>

      <Header />


      <main>

        {children}

      </main>


    </>

  );

}


export default Layout;

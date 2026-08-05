import Logo from "./Logo.jsx";
import "./header.css";


function Header(){


  return(

    <header className="top-header">


      <button className="settings-btn">

        ⚙

      </button>



      <div className="logo-center">


        <Logo />


        <h1>

          Barzanjeh Gold

        </h1>


        <span>

          طلا | سرمایه | اعتماد

        </span>


      </div>


    </header>

  );

}


export default Header;

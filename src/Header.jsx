import Logo from "./Logo.jsx";
import "./header.css";


function Header(){

  return(

    <header className="gold-header">


      <button className="header-action">
        ⚙
      </button>


      <div className="header-logo">

        <Logo />

      </div>


    </header>

  );

}


export default Header;

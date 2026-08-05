import Logo from "./Logo.jsx";
import "./header.css";


function Header(){

  return(

    <header className="top-header">


      <div className="brand-area">


        <Logo />


        <div className="brand-text">

          <h1>
            Barzanjeh Gold
          </h1>


          <span>
            طلا | سرمایه | اعتماد
          </span>


        </div>


      </div>



      <button className="settings-btn">

        ⚙

      </button>


    </header>

  );

}


export default Header;

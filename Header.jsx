import BarzanjehLogo from "./BarzanjehLogo.jsx";
import "./Header.css";


function Header(){

  return(

    <header className="top-header">


      <div className="brand-area">


        <BarzanjehLogo />


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

import Logo from "./Logo";
import "./styles/header.css";


function Header(){

  return(

    <header className="header">


      <div className="logo-box">

        <Logo />


        <p>
          سرمایه‌گذاری هوشمند روی طلا
        </p>


      </div>


    </header>

  );

}


export default Header;

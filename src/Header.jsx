import Logo from "./Logo";
import "./styles/header.css";


function Header(){

  return (

    <header className="hero-header">


      <div className="hero-content">


        <Logo />


        <h1>
          Barzanjeh Gold
        </h1>


        <p>
          سرمایه‌گذاری هوشمند روی طلا
        </p>


        <button className="gold-button">
          شروع سرمایه‌گذاری
        </button>


      </div>


    </header>

  );

}


export default Header;

import { Link } from "react-router-dom";
import "./styles/navbar.css";


function Navbar(){

  return (

    <nav className="navbar">

      <Link to="/">
        🏠
        <span>خانه</span>
      </Link>


      <Link to="/market">
        📈
        <span>بازار</span>
      </Link>


      <Link to="/wallet">
        🪙
        <span>کیف طلا</span>
      </Link>


      <Link to="/settings">
        ⚙️
        <span>تنظیمات</span>
      </Link>

    </nav>

  );

}


export default Navbar;

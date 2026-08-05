import "./header.css";
import { useEffect, useState } from "react";


function Header(){

  const [time,setTime] = useState(new Date());


  useEffect(()=>{

    const timer = setInterval(()=>{

      setTime(new Date());

    },1000);


    return ()=>clearInterval(timer);

  },[]);



  return(

    <header className="top-header">


      <div className="header-time">

        <span>
          {time.toLocaleDateString("fa-IR")}
        </span>


        <span>
          {time.toLocaleTimeString("fa-IR",{
            hour:"2-digit",
            minute:"2-digit"
          })}
        </span>


      </div>



      <button className="settings-btn">

        ⚙

      </button>



      <h1 className="header-title">

        Barzanjeh Gold

      </h1>



    </header>

  );

}


export default Header;

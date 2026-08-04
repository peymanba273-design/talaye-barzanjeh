import { useState } from "react";
import "./auth.css";


function Login({setLogged}){


  const [mode,setMode]=useState("login");


  return (

    <section className="auth-page">


      <div className="auth-card">


        <div className="auth-logo">

          B

        </div>


        <h1>
          Barzanjeh Gold
        </h1>


        <p>
          سرمایه‌گذاری هوشمند طلا
        </p>




        {
          mode==="login"
          ?

          <>

          <input
          placeholder="شماره موبایل"
          />


          <input
          placeholder="رمز عبور"
          type="password"
          />


          <button
          onClick={()=>setLogged(true)}
          >

          ورود

          </button>


          </>


          :


          <>

          <input
          placeholder="نام کامل"
          />


          <input
          placeholder="شماره موبایل"
          />


          <input
          placeholder="رمز عبور"
          type="password"
          />


          <button
          onClick={()=>setLogged(true)}
          >

          ثبت نام

          </button>


          </>

        }





        <span
        className="switch-auth"
        onClick={
          ()=>setMode(
            mode==="login"
            ?
            "register"
            :
            "login"
          )
        }
        >

        {
          mode==="login"
          ?
          "حساب ندارید؟ ثبت نام"
          :
          "قبلاً ثبت نام کرده‌اید؟ ورود"
        }


        </span>


      </div>


    </section>

  );

}


export default Login;

import "./auth.css";


function Login({setLogged, setPage}){


  return (

    <section className="auth-page">


      <div className="auth-card">


        <div className="auth-logo">
          B
        </div>


        <h1>
          ورود به Barzanjeh Gold
        </h1>


        <p>
          مدیریت هوشمند سرمایه طلا
        </p>



        <input
        placeholder="شماره موبایل"
        />



        <input
        type="password"
        placeholder="رمز عبور"
        />



        <button
        onClick={()=>setLogged(true)}
        >

          ورود

        </button>



        <span

        className="switch-auth"

        onClick={()=>setPage("register")}

        >

          حساب ندارید؟ ثبت نام کنید

        </span>



      </div>


    </section>

  );

}


export default Login;

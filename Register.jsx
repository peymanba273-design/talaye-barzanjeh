import "./auth.css";


function Register({setLogged, setPage}){


  return (

    <section className="auth-page">


      <div className="auth-card">


        <div className="auth-logo">
          B
        </div>



        <h1>
          ساخت حساب جدید
        </h1>



        <p>
          عضویت در Barzanjeh Gold
        </p>




        <input

        placeholder="نام کامل"

        />



        <input

        placeholder="شماره موبایل"

        />



        <input

        type="password"

        placeholder="رمز عبور"

        />



        <input

        type="password"

        placeholder="تکرار رمز عبور"

        />




        <button

        onClick={()=>setLogged(true)}

        >

          ثبت نام

        </button>




        <span

        className="switch-auth"

        onClick={()=>setPage("login")}

        >

          قبلاً حساب دارید؟ ورود

        </span>



      </div>


    </section>

  );

}


export default Register;

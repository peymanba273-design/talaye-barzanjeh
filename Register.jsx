import "./auth.css";


function Register({setLogged}){


  return (

    <section className="auth-page">


      <div className="auth-card">


        <div className="auth-logo">
          B
        </div>


        <h1>
          ساخت حساب
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
        placeholder="رمز عبور"
        type="password"
        />



        <button
        onClick={()=>setLogged(true)}
        >

          ثبت نام

        </button>



      </div>


    </section>

  );

}


export default Register;

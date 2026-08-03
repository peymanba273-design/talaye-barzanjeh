import "./styles/settings.css";


function Settings(){

  return (

    <section className="settings">


      <h1>
        تنظیمات
      </h1>


      <div className="setting-card">

        <p>
          حالت نمایش
        </p>

        <button>
          Dark Mode
        </button>

      </div>


      <div className="setting-card">

        <p>
          امنیت حساب
        </p>

        <button>
          مدیریت حساب
        </button>

      </div>


    </section>

  );

}


export default Settings;

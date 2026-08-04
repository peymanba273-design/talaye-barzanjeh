import "./settings.css";


function Settings(){

  const options = [

    "اطلاعات حساب",

    "امنیت و رمز عبور",

    "اعلان‌ها",

    "حالت نمایش",

    "خروج از حساب"

  ];


  return (

    <section className="settings-page">


      <h1>
        تنظیمات
      </h1>



      <div className="profile-card">


        <div className="profile-logo">

          B

        </div>


        <h2>
          کاربر Barzanjeh
        </h2>


        <p>
          حساب سرمایه‌گذاری طلا
        </p>


      </div>





      <div className="settings-list">


        {
          options.map((item,index)=>(

            <div 
            className="settings-item"
            key={index}
            >


              <span>
                {item}
              </span>


              <b>
                ›
              </b>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default Settings;

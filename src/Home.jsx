import "./home.css";


function Home() {


  return (

    <div className="home-page">


      <div className="update-time">

        آخرین بروزرسانی قیمت:
        <span>
          14:32:05
        </span>

      </div>



      <section className="price-grid">


        <PriceCard

          title="آبشده"

          value="7,950,000 تومان"

        />


        <PriceCard

          title="اونس جهانی"

          value="3,350 دلار"

        />


        <PriceCard

          title="تتر"

          value="91,200 تومان"

        />


      </section>





      <section className="gold-dashboard">


        <p>
          ارزش کل دارایی
        </p>


        <h1>
          98,125,000 تومان
        </h1>



      </section>





      <section className="home-actions">


        <button className="buy-btn">

          خرید طلا

        </button>



        <button className="sell-btn">

          فروش طلا

        </button>



      </section>





      <section className="convert-box">


        <h2>
          تبدیل طلا و تومان
        </h2>


        <div>

          10,000,000 تومان

        </div>


        <span>
          ⇅
        </span>


        <div>

          1.25 گرم طلا

        </div>



      </section>






      <section className="chart-box">


        <h2>
          نمودار قیمت
        </h2>


        <div className="chart-placeholder">

          Chart

        </div>


      </section>






      <section className="activity-box">


        <h2>
          آخرین فعالیت‌ها
        </h2>



        <div>
          خرید ۲ گرم طلا انجام شد
        </div>



        <div>
          قیمت بازار به‌روزرسانی شد
        </div>



        <div>
          ورود موفق به حساب
        </div>



      </section>



    </div>

  );

}





function PriceCard({

  title,

  value

}) {


  return (

    <div className="price-card">


      <p>
        {title}
      </p>


      <strong>
        {value}
      </strong>


    </div>

  );

}



export default Home;

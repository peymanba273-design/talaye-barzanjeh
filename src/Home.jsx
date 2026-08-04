import "./home.css";

function Home() {

  return (

    <div className="home-page">


      <section className="gold-dashboard">

        <p>
          ارزش کل دارایی
        </p>

        <h1>
          98,125,000 تومان
        </h1>


        <div className="home-actions">

          <button className="buy-btn">
            خرید طلا
          </button>


          <button className="sell-btn">
            فروش طلا
          </button>

        </div>

      </section>



      <section className="cards-grid">


        <PriceCard
          title="طلای ۱۸ عیار"
          value="7,950,000 تومان"
        />


        <PriceCard
          title="اونس جهانی"
          value="3,350 دلار"
        />


        <PriceCard
          title="موجودی طلا"
          value="12.50 گرم"
        />


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



function PriceCard({title,value}) {

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

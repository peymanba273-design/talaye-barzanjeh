import "./wallet.css";


function WalletPage(){


  return(

    <div className="wallet-page">


      <h1>
        کیف پول طلا
      </h1>



      <section className="wallet-main">


        <p>
          موجودی طلای شما
        </p>


        <h2>
          12.50 گرم
        </h2>


        <span>
          ارزش تقریبی:
          <b>
            98,125,000 تومان
          </b>
        </span>


      </section>





      <section className="wallet-actions">


        <button className="wallet-buy">
          خرید طلا
        </button>


        <button className="wallet-sell">
          فروش طلا
        </button>


      </section>





      <section className="wallet-info">


        <div className="wallet-card">

          <p>
            آخرین خرید
          </p>

          <strong>
            2 گرم
          </strong>

        </div>




        <div className="wallet-card">

          <p>
            سود امروز
          </p>

          <strong>
            +1,250,000 تومان
          </strong>

        </div>




        <div className="wallet-card">

          <p>
            تعداد معاملات
          </p>

          <strong>
            24
          </strong>

        </div>


      </section>





      <section className="wallet-history">


        <h2>
          آخرین تراکنش‌ها
        </h2>


        <div>
          خرید ۲ گرم طلا
          <span>
            امروز
          </span>
        </div>


        <div>
          فروش ۱ گرم طلا
          <span>
            دیروز
          </span>
        </div>


      </section>



    </div>

  );

}



export default WalletPage;

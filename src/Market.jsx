import "./market.css";


function Market(){


  const markets=[

    {
      title:"طلای ۱۸ عیار",
      price:"7,950,000 تومان",
      change:"+1.25%"
    },

    {
      title:"طلای ۲۴ عیار",
      price:"10,600,000 تومان",
      change:"+0.85%"
    },

    {
      title:"مثقال طلا",
      price:"34,450,000 تومان",
      change:"+0.60%"
    },

    {
      title:"اونس جهانی",
      price:"3,350 دلار",
      change:"+0.40%"
    },

    {
      title:"سکه امامی",
      price:"85,000,000 تومان",
      change:"-0.20%"
    },

    {
      title:"نیم سکه",
      price:"45,500,000 تومان",
      change:"+0.15%"
    },

    {
      title:"ربع سکه",
      price:"26,800,000 تومان",
      change:"-0.10%"
    },

    {
      title:"دلار",
      price:"160,000 تومان",
      change:"+0.35%"
    }

  ];



  return(

    <div className="market-page">


      <h1>
        بازار طلا
      </h1>



      <div className="market-top">

        <p>
          وضعیت لحظه‌ای بازار
        </p>


        <strong>
          باز
        </strong>


      </div>



      <section className="market-grid">


      {

        markets.map((item,index)=>(


          <div
          className="market-card"
          key={index}
          >


            <h2>
              {item.title}
            </h2>


            <div className="market-price">

              {item.price}

            </div>


            <span

            className={
              item.change.includes("-")
              ?
              "negative"
              :
              "positive"
            }

            >

              {item.change}

            </span>


          </div>


        ))

      }


      </section>




      <section className="chart-placeholder">


        <h2>
          نمودار قیمت
        </h2>


        <div>

          نمودار قیمت در مرحله بعد به بازار لحظه‌ای وصل می‌شود

        </div>


      </section>



    </div>

  );

}


export default Market;

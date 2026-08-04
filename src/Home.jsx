import { useState } from "react";
import "./home.css";
import PriceChart from "../PriceChart.jsx";


function Home(){


  const [selected,setSelected] = useState("طلای ۱۸ عیار");



  const prices = [

    {
      title:"طلای ۱۸ عیار",
      value:"7,950,000 تومان"
    },

    {
      title:"آبشده",
      value:"34,210,000 تومان"
    },

    {
      title:"اونس جهانی",
      value:"3,350 دلار"
    },

    {
      title:"تتر",
      value:"98,500 تومان"
    },

    {
      title:"سکه امامی",
      value:"85,000,000 تومان"
    },

    {
      title:"نیم سکه",
      value:"45,000,000 تومان"
    },

    {
      title:"ربع سکه",
      value:"25,000,000 تومان"
    },

    {
      title:"سکه گرمی",
      value:"14,000,000 تومان"
    }

  ];



  return (

    <div className="home-page">


      <section className="prices-grid">


        {
          prices.map((item,index)=>(

            <div

              key={index}

              onClick={()=>setSelected(item.title)}

              className={
                selected === item.title
                ?
                "price-card active"
                :
                "price-card"
              }

            >

              <p>
                {item.title}
              </p>


              <strong>
                {item.value}
              </strong>


            </div>

          ))
        }


      </section>




      <section className="chart-box">

        <PriceChart

          title={selected}

        />

      </section>




      <section className="asset-box">


        <p>
          ارزش کل دارایی
        </p>


        <h1>
          98,125,000 تومان
        </h1>


      </section>





      <section className="convert-box">


        <button>
          تبدیل پول به طلا
        </button>


        <button>
          تبدیل طلا به پول
        </button>


      </section>



    </div>

  );


}


export default Home;

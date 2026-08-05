import { useEffect, useState } from "react";
import "./market.css";


function Market(){

  const [selected,setSelected]=useState("طلای ۱۸ عیار");

  const [range,setRange]=useState("1D");

  const [prices,setPrices]=useState(null);



  useEffect(()=>{


    fetch("http://localhost:5000/api/prices")

    .then(res=>res.json())

    .then(data=>{

      setPrices(data);

    })

    .catch(error=>{

      console.log(error);

    });


  },[]);





  const markets=[

    {
      title:"طلای ۱۸ عیار",
      price: prices
      ?
      prices.gold18.toLocaleString()+" تومان"
      :
      "در حال دریافت..."
    },


    {
      title:"طلای ۲۴ عیار",
      price: prices
      ?
      prices.gold24.toLocaleString()+" تومان"
      :
      "در حال دریافت..."
    },


    {
      title:"مثقال طلا",
      price: prices
      ?
      prices.gold18.toLocaleString()+" تومان"
      :
      "در حال دریافت..."
    },


    {
      title:"سکه امامی",
      price: prices
      ?
      prices.coin.toLocaleString()+" تومان"
      :
      "در حال دریافت..."
    },


    {
      title:"دلار",
      price: prices
      ?
      prices.dollar.toLocaleString()+" تومان"
      :
      "در حال دریافت..."
    },


    {
      title:"اونس جهانی",
      price: prices
      ?
      prices.ounce.toLocaleString()+" دلار"
      :
      "در حال دریافت..."
    }


  ];





  const chartData=[

    7800,
    7900,
    7850,
    8100,
    8250,
    8150,
    8400,
    8500

  ];





  const max=Math.max(...chartData);

  const min=Math.min(...chartData);



  const points=chartData.map((item,index)=>{


    const x=index*(320/(chartData.length-1));


    const y=
    170-
    ((item-min)/(max-min))*130;


    return `${x},${y}`;


  }).join(" ");







  return(


    <div className="market-page">



      <h1>
        بازار طلا
      </h1>




      <section className="market-grid">


      {

        markets.map((item,index)=>(


          <div

          key={index}

          onClick={()=>setSelected(item.title)}

          className={

          selected===item.title

          ?

          "market-card active"

          :

          "market-card"

          }


          >


            <h2>
              {item.title}
            </h2>


            <div className="market-price">

              {item.price}

            </div>


          </div>


        ))

      }


      </section>






      <section className="market-chart">



        <div className="chart-title">


          <h2>
            {selected}
          </h2>


          <strong>

          {

          prices

          ?

          "قیمت لحظه‌ای"

          :

          "اتصال به سرور..."

          }

          </strong>


        </div>





        <div className="range-buttons">


        {

          ["1D","1W","1M","1Y"].map(item=>(


            <button

            key={item}

            className={

            range===item

            ?

            "active-range"

            :

            ""

            }

            onClick={()=>setRange(item)}

            >

              {item}

            </button>


          ))

        }


        </div>






        <div className="svg-chart">


          <svg viewBox="0 0 320 190">



          <polyline

          points={points}

          fill="none"

          stroke="#b8860b"

          strokeWidth="3"

          strokeLinecap="round"

          />




          <polygon

          points={`0,170 ${points} 320,170`}

          fill="rgba(184,134,11,.18)"

          />





          {

          chartData.map((item,index)=>{


            const x=index*(320/(chartData.length-1));


            const y=
            170-
            ((item-min)/(max-min))*130;



            return(

              <circle

              key={index}

              cx={x}

              cy={y}

              r="4"

              fill="#d4af37"

              />

            )


          })

          }



          </svg>


        </div>



      </section>



    </div>


  );


}



export default Market;

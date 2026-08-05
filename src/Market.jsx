
import { useEffect, useState } from "react";
import "./market.css";

import { getPrices } from "../api/priceApi.js";


function Market(){


  const defaultPrices = {

    gold18:7950000,
    gold24:10600000,
    mesghal:34500000,
    coin:85000000,
    halfCoin:45000000,
    quarterCoin:25000000,
    dollar:160000,
    ounce:3350

  };



  const [prices,setPrices]=useState(defaultPrices);


  const [lastUpdate,setLastUpdate]=useState(
    new Date().toLocaleTimeString("fa-IR")
  );


  const [selected,setSelected]=useState(
    "طلای ۱۸ عیار"
  );





  async function loadPrices(){


    const data = await getPrices();



    if(data){

      setPrices(data);

    }



    setLastUpdate(
      new Date().toLocaleTimeString("fa-IR")
    );


  }






  useEffect(()=>{


    loadPrices();



    const timer=setInterval(()=>{


      loadPrices();


    },300000);



    return ()=>clearInterval(timer);


  },[]);







  const markets=[

    {
      title:"طلای ۱۸ عیار",
      value:prices.gold18,
      unit:"تومان"
    },


    {
      title:"طلای ۲۴ عیار",
      value:prices.gold24,
      unit:"تومان"
    },


    {
      title:"مثقال طلا",
      value:prices.mesghal,
      unit:"تومان"
    },


    {
      title:"سکه امامی",
      value:prices.coin,
      unit:"تومان"
    },


    {
      title:"نیم سکه",
      value:prices.halfCoin,
      unit:"تومان"
    },


    {
      title:"ربع سکه",
      value:prices.quarterCoin,
      unit:"تومان"
    },


    {
      title:"دلار آزاد",
      value:prices.dollar,
      unit:"تومان"
    },


    {
      title:"اونس جهانی",
      value:prices.ounce,
      unit:"دلار"
    }

  ];





  return(


    <div className="market-page">


      <h1>
        بازار طلا
      </h1>



      <div className="update-time">

        آخرین بروزرسانی:
        {" "}
        {lastUpdate}

      </div>





      <div className="market-grid">


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



          <strong>

          {item.value.toLocaleString("fa-IR")}

          </strong>



          <span>

          {item.unit}

          </span>


        </div>


      ))

      }


      </div>




      <div className="market-chart">


        <h2>
          نمودار {selected}
        </h2>



        <svg viewBox="0 0 320 180">


          <polyline

          points="0,130 50,110 100,120 150,80 200,90 250,60 300,70"

          fill="none"

          stroke="#d4af37"

          strokeWidth="4"

          strokeLinecap="round"

          />


        </svg>



      </div>



    </div>


  );


}


export default Market;

import { useEffect, useState } from "react";
import "./market.css";


function Market(){


  const defaultData = {

    gold18:7950000,
    gold24:10600000,
    mesghal:34500000,
    coin:85000000,
    halfCoin:45000000,
    quarterCoin:25000000,
    dollar:160000,
    ounce:3350

  };



  const [prices,setPrices]=useState(defaultData);


  const [lastUpdate,setLastUpdate]=useState(
    new Date().toLocaleTimeString("fa-IR")
  );


  const [selected,setSelected]=useState(
    "طلای ۱۸ عیار"
  );




  async function getPrices(){


    try{


      /*
      بعداً آدرس API واقعی اینجا قرار می‌گیرد

      مثال:

      const response =
      await fetch("https://api-address.com/prices");

      const data =
      await response.json();

      */


      // فعلاً تست خودکار
      setPrices(prev=>({

        ...prev,

        gold18:
        prev.gold18 + Math.floor(Math.random()*2000-1000),

        gold24:
        prev.gold24 + Math.floor(Math.random()*3000-1500),

        coin:
        prev.coin + Math.floor(Math.random()*50000-25000),

        dollar:
        prev.dollar + Math.floor(Math.random()*100-50)

      }));



      setLastUpdate(
        new Date().toLocaleTimeString("fa-IR")
      );



    }

    catch(error){

      console.log(error);

    }


  }







  useEffect(()=>{


    getPrices();


    const timer=setInterval(()=>{

      getPrices();

    },300000); // هر ۵ دقیقه



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







  const chart=[

    7800,
    7950,
    7900,
    8200,
    8350,
    8300,
    8500

  ];



  const points=chart.map((v,i)=>{


    const x=i*50;

    const y=150-(v-7800)/10;


    return `${x},${y}`;


  }).join(" ");







return(

<div className="market-page">


<h1>
بازار طلا
</h1>



<div className="update-time">

آخرین بروزرسانی:
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

points={points}

fill="none"

stroke="#b8860b"

strokeWidth="4"

strokeLinecap="round"

/>


</svg>



</div>



</div>


);


}


export default Market;

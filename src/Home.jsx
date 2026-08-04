import { useState } from "react";

import "./home.css";

import PriceCard from "../PriceCard.jsx";
import PriceChart from "../PriceChart.jsx";
import ConvertBox from "../ConvertBox.jsx";



function Home(){


  const [selected,setSelected] = useState("طلای ۱۸ عیار");



  const prices = [

    {
      title:"طلای ۱۸ عیار",
      value:"7,950,000 تومان",
      change:1.8
    },

    {
      title:"آبشده",
      value:"34,210,000 تومان",
      change:1.2
    },

    {
      title:"اونس جهانی",
      value:"3,350 دلار",
      change:-0.4
    },

    {
      title:"تتر",
      value:"98,500 تومان",
      change:0.6
    },

    {
      title:"سکه امامی",
      value:"85,000,000 تومان",
      change:2.1
    },

    {
      title:"نیم سکه",
      value:"45,000,000 تومان",
      change:0.9
    }

  ];




  return (

    <div className="home-page">



      <section className="prices-grid">


        {

          prices.map((item,index)=>(


            <PriceCard


              key={index}


              title={item.title}


              value={item.value}


              change={item.change}


              active={selected === item.title}


              onClick={()=>setSelected(item.title)}


            />


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





      <ConvertBox />





    </div>

  );


}


export default Home;

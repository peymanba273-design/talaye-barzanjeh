import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

import "./market.css";


function Market(){


  const [selected, setSelected] = useState("طلای ۱۸ عیار");

  const [range, setRange] = useState("1D");


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
      title:"دلار",
      price:"160,000 تومان",
      change:"+0.35%"
    }

  ];



  const chartData=[

    {time:"10",price:7800},

    {time:"12",price:7900},

    {time:"14",price:7850},

    {time:"16",price:8100},

    {time:"18",price:7950},

    {time:"20",price:8300},

  ];



  return(

    <div className="market-page">


      <h1>
        بازار طلا
      </h1>



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


      </div>




      <section className="market-chart">


        <div className="chart-title">


          <h2>
            {selected}
          </h2>


          <strong>
            7,950,000 تومان
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




        <ResponsiveContainer width="100%" height={280}>


          <AreaChart data={chartData}>


            <defs>

              <linearGradient
              id="gold"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              >

                <stop
                offset="5%"
                stopColor="#d4af37"
                stopOpacity={0.4}
                />

                <stop
                offset="95%"
                stopColor="#d4af37"
                stopOpacity={0}
                />

              </linearGradient>


            </defs>



            <XAxis dataKey="time"/>


            <YAxis/>


            <Tooltip/>



            <Area

            type="monotone"

            dataKey="price"

            stroke="#b8860b"

            fill="url(#gold)"

            strokeWidth={3}

            />


          </AreaChart>


        </ResponsiveContainer>


      </section>


    </div>

  );

}


export default Market;

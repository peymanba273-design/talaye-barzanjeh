import { useState } from "react";
import "./market.css";


function Market(){


  const [selected,setSelected]=useState("طلای ۱۸ عیار");

  const [range,setRange]=useState("1D");



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



  const data=[

    7800,
    7920,
    7880,
    8050,
    7980,
    8200,
    8350,
    8300

  ];



  const points=data.map((item,index)=>{

    const x=index*(320/(data.length-1));

    const max=Math.max(...data);

    const min=Math.min(...data);


    const y=170-((item-min)/(max-min))*130;


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

            onClick={()=>setRange(item)}

            className={

              range===item

              ?

              "active-range"

              :

              ""

            }

            >

              {item}

            </button>


          ))

        }


        </div>






        <div className="svg-chart">


          <svg

          viewBox="0 0 320 190"

          preserveAspectRatio="none"

          >



            <defs>


              <linearGradient

              id="area"

              x1="0"

              y1="0"

              x2="0"

              y2="1"

              >

                <stop

                offset="0%"

                stopColor="#d4af37"

                stopOpacity=".45"

                />


                <stop

                offset="100%"

                stopColor="#d4af37"

                stopOpacity="0"

                />


              </linearGradient>


            </defs>





            <polyline

            points={points}

            fill="none"

            stroke="#b8860b"

            strokeWidth="3"

            strokeLinecap="round"

            strokeLinejoin="round"

            />





            <polygon

            points={`0,170 ${points} 320,170`}

            fill="url(#area)"

            />






            {

              data.map((item,index)=>{


                const x=index*(320/(data.length-1));

                const max=Math.max(...data);

                const min=Math.min(...data);

                const y=170-((item-min)/(max-min))*130;



                return(

                  <circle

                  key={index}

                  cx={x}

                  cy={y}

                  r="4"

                  fill="#d4af37"

                  />


                );


              })

            }



          </svg>



        </div>




      </section>





    </div>


  );

}



export default Market;

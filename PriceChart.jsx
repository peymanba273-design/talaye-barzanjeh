function PriceChart({title}){


  const points = [
    7950000,
    7985000,
    7960000,
    8035000,
    8100000,
    8080000,
    8150000
  ];



  const max = Math.max(...points);

  const min = Math.min(...points);



  const chartPoints = points.map((price,index)=>{


    const x =

      20 +

      index *

      60;



    const y =

      220 -

      (

        (price-min)

        /

        (max-min)

        *

        180

      );



    return `${x},${y}`;


  }).join(" ");




  const current = points[points.length-1];



  const change =

  (

    (

      current - points[0]

    )

    /

    points[0]

    *

    100

  ).toFixed(2);




  return (


    <div className="professional-chart">



      <div className="chart-header">


        <div>


          <h2>

            {title}

          </h2>


          <strong>

            {current.toLocaleString()}

            تومان

          </strong>


        </div>



        <span className="chart-up">

          ▲ {change}%

        </span>



      </div>





      <svg

        width="100%"

        height="260"

        viewBox="0 0 450 260"

      >



        <defs>


          <linearGradient

            id="goldLine"

            x1="0"

            y1="0"

            x2="1"

            y2="1"

          >

            <stop

              offset="0%"

              stopColor="#f5d77a"

            />


            <stop

              offset="100%"

              stopColor="#b8860b"

            />


          </linearGradient>


        </defs>





        <polyline


          points={chartPoints}


          fill="none"


          stroke="url(#goldLine)"


          strokeWidth="5"


          strokeLinecap="round"


          strokeLinejoin="round"


        />




        {

          points.map((price,index)=>{


            const x =

            20 +

            index *

            60;



            const y =

            220 -

            (

              (price-min)

              /

              (max-min)

              *

              180

            );



            return (


              <circle

                key={index}

                cx={x}

                cy={y}

                r="5"

                fill="#b8860b"

              />


            );


          })


        }



      </svg>





      <div className="chart-range">


        <button>
          ۱ ساعت
        </button>


        <button>
          ۱ روز
        </button>


        <button>
          ۱ هفته
        </button>


        <button>
          ۱ ماه
        </button>


        <button>
          ۱ سال
        </button>


      </div>



    </div>


  );


}


export default PriceChart;

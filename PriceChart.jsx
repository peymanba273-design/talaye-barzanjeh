import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";


function PriceChart({title}){


  const data = [

    {
      time:"10:00",
      price:7950000
    },

    {
      time:"12:00",
      price:7985000
    },

    {
      time:"14:00",
      price:7960000
    },

    {
      time:"16:00",
      price:8035000
    },

    {
      time:"18:00",
      price:8100000
    }

  ];



  const currentPrice =
    data[data.length - 1].price;



  const change =
    (
      (
        currentPrice - data[0].price
      )
      /
      data[0].price
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

            {currentPrice.toLocaleString()}

            تومان

          </strong>


        </div>



        <span className="chart-up">

          ▲ {change}%

        </span>


      </div>





      <ResponsiveContainer

        width="100%"

        height={280}

      >


        <LineChart data={data}>


          <CartesianGrid

            strokeDasharray="4 4"

            opacity={0.2}

          />



          <XAxis

            dataKey="time"

            tick={{fontSize:12}}

          />



          <YAxis

            hide

          />



          <Tooltip

            formatter={(value)=>

              [

              value.toLocaleString()+" تومان",

              "قیمت"

              ]

            }

          />




          <Line

            type="monotone"

            dataKey="price"

            stroke="#b8860b"

            strokeWidth={4}

            dot={false}

            activeDot={{

              r:6

            }}

          />



        </LineChart>


      </ResponsiveContainer>






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

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function PriceChart({title}){


  const data = [

    {
      time:"10:00",
      price:7950000
    },

    {
      time:"12:00",
      price:7980000
    },

    {
      time:"14:00",
      price:7960000
    },

    {
      time:"16:00",
      price:8030000
    },

    {
      time:"18:00",
      price:8100000
    }

  ];



  return (

    <div className="price-chart">


      <h2>
        نمودار {title}
      </h2>


      <ResponsiveContainer
        width="100%"
        height={300}
      >


        <LineChart data={data}>


          <XAxis
            dataKey="time"
          />


          <YAxis
            hide
          />


          <Tooltip />


          <Line

            type="monotone"

            dataKey="price"

            stroke="#b8860b"

            strokeWidth={3}

            dot={false}

          />


        </LineChart>


      </ResponsiveContainer>


    </div>

  );


}


export default PriceChart;

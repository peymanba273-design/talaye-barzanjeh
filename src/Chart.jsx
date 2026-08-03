import "./chart.css";


function Chart(){

  const points = [
    40,55,48,70,62,85,75,95
  ];


  return (

    <section className="chart-box">


      <div className="chart-header">

        <h2>
          نمودار قیمت طلا
        </h2>


        <span>
          رشد ۲۴ ساعت اخیر +۳.۲٪
        </span>

      </div>



      <div className="chart-area">


        <svg 
        viewBox="0 0 400 180"
        preserveAspectRatio="none"
        >


          <defs>

            <linearGradient 
            id="goldLine"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            >

              <stop 
              offset="0%"
              stopColor="#8A6B16"
              />

              <stop 
              offset="100%"
              stopColor="#F7E7A9"
              />

            </linearGradient>


          </defs>



          <polyline

          points={
            points.map(
              (p,i)=>
              `${i*55},${160-p}`
            ).join(" ")
          }


          fill="none"

          stroke="url(#goldLine)"

          strokeWidth="5"

          strokeLinecap="round"

          />



        </svg>


      </div>



    </section>

  );

}


export default Chart;

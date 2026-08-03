import "./styles/chart.css";

function Chart(){

  return(

    <section className="chart-box">

      <div className="chart-header">

        <h2>
          نمودار لحظه‌ای بازار
        </h2>


        <div className="chart-buttons">

          <button>
            آبشده
          </button>

          <button>
            اونس
          </button>

          <button>
            تتر
          </button>

        </div>

      </div>


      <div className="candles">

        <div className="candle up"></div>
        <div className="candle down"></div>
        <div className="candle up"></div>
        <div className="candle up"></div>
        <div className="candle down"></div>
        <div className="candle up"></div>
        <div className="candle up"></div>

      </div>


    </section>

  );

}


export default Chart;

import Chart from "../Chart";
import PriceCards from "../PriceCards";
import "./styles/market.css";


function Market(){

  return (

    <section className="market">

      <h1>
        بازار طلا
      </h1>


      <PriceCards />


      <Chart />


    </section>

  );

}


export default Market;

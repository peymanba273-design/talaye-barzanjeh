import Background from "./Background";

import Header from "./Header";
import PriceCards from "./PriceCards";
import Chart from "./Chart";
import Converter from "./Converter";
import Wallet from "./Wallet";


import "./styles/home.css";


function Home(){

  return (

    <div className="home-page">


      <Background />


      <main className="home-content">


        <Header />


        <section className="home-section">

          <PriceCards />

        </section>



        <section className="home-section">

          <Chart />

        </section>



        <section className="home-section">

          <Converter />

        </section>



        <section className="home-section">

          <Wallet />

        </section>


      </main>


    </div>

  );

}


export default Home;

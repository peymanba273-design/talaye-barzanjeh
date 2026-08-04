import "./market.css";


function Market(){

  const marketData = [

    {
      name:"طلای ۱۸ عیار",
      price:"۷,۸۵۰,۰۰۰ تومان",
      change:"+۲.۴٪"
    },

    {
      name:"اونس جهانی",
      price:"۳,۳۵۰ دلار",
      change:"+۰.۸٪"
    },

    {
      name:"دلار",
      price:"۹۵,۰۰۰ تومان",
      change:"+۱.۲٪"
    },

    {
      name:"سکه",
      price:"۸۶,۰۰۰,۰۰۰ تومان",
      change:"+۱.۷٪"
    }

  ];


  return (

    <section className="market-page">


      <h1>
        بازار طلا
      </h1>


      <div className="market-grid">


        {
          marketData.map((item,index)=>(

            <div 
            className="market-card"
            key={index}
            >


              <h3>
                {item.name}
              </h3>


              <strong>
                {item.price}
              </strong>


              <span>
                {item.change}
              </span>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default Market;

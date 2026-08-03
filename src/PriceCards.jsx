import "./price.css";


function PriceCards(){

  const prices = [

    {
      title:"طلای ۱۸ عیار",
      price:"۷,۸۵۰,۰۰۰",
      change:"+۲.۴٪"
    },

    {
      title:"سکه بهار آزادی",
      price:"۸۶,۰۰۰,۰۰۰",
      change:"+۱.۱٪"
    },

    {
      title:"اونس جهانی",
      price:"۳,۳۵۰ دلار",
      change:"+۰.۶٪"
    }

  ];


  return (

    <section className="price-container">


      {
        prices.map((item,index)=>(

          <div 
          className="price-card"
          key={index}
          >


            <h3>
              {item.title}
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


    </section>

  );

}


export default PriceCards;

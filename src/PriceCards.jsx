import "./styles/price.css";

function PriceCards(){

  const prices = [
    {
      name:"طلای آبشده",
      icon:"🟨",
      price:"75,000,000",
      change:"+1.2%",
      up:true
    },
    {
      name:"اونس جهانی",
      icon:"🌍",
      price:"3,350$",
      change:"-0.4%",
      up:false
    },
    {
      name:"تتر",
      icon:"💵",
      price:"95,000",
      change:"+0.8%",
      up:true
    }
  ];


  return(

    <section className="prices">

      {prices.map((item,index)=>(

        <div className="price-card" key={index}>

          <div className="icon">
            {item.icon}
          </div>

          <h3>
            {item.name}
          </h3>

          <strong>
            {item.price}
          </strong>

          <span className={item.up ? "green":"red"}>
            {item.change}
          </span>

        </div>

      ))}

    </section>

  );

}

export default PriceCards;

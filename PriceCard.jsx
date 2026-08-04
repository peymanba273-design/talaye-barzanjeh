function PriceCard({

title,

value,

change,

active,

onClick

}){


  return (

    <div

      onClick={onClick}

      className={

        active

        ?

        "price-card active"

        :

        "price-card"

      }

    >


      <div className="card-top">


        <span className="gold-icon">

          ◈

        </span>


        <p>

          {title}

        </p>


      </div>




      <strong>

        {value}

      </strong>



      <small

        className={

          change >= 0

          ?

          "positive"

          :

          "negative"

        }

      >


        {

          change >= 0

          ?

          "▲ "

          :

          "▼ "

        }


        {change}%


      </small>



    </div>

  );


}


export default PriceCard;

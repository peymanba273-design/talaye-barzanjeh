import { useState } from "react";
import "./styles/converter.css";


function Converter(){

  const [gram,setGram] = useState("");
  const [money,setMoney] = useState("");


  const goldPrice = 7500000;


  return(

    <section className="converter">


      <h2>
        تبدیل هوشمند طلا
      </h2>


      <div className="convert-box">


        <input

          type="number"

          placeholder="گرم طلا"

          value={gram}

          onChange={(e)=>{

            setGram(e.target.value);

            setMoney(
              e.target.value * goldPrice
            );

          }}

        />


        <span>
          تومان
        </span>


      </div>



      <div className="result">

        ارزش تقریبی:

        <strong>
          {money || 0}
          تومان
        </strong>

      </div>



    </section>

  );

}


export default Converter;

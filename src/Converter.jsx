import { useState } from "react";
import "./converter.css";


function Converter(){

  const [gold,setGold] = useState(1);

  const goldPrice = 7850000;


  const total = gold * goldPrice;


  return (

    <section className="converter-box">


      <h2>
        تبدیل هوشمند طلا
      </h2>



      <div className="converter-input">


        <label>
          مقدار طلا (گرم)
        </label>


        <input

        type="number"

        value={gold}

        onChange={
          (e)=>setGold(e.target.value)
        }

        />

      </div>



      <div className="converter-result">


        <span>
          ارزش تقریبی
        </span>


        <strong>
          {Number(total).toLocaleString()}
          {" "}
          تومان
        </strong>


      </div>



    </section>

  );

}


export default Converter;

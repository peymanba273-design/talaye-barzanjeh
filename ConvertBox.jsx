import { useState } from "react";


function ConvertBox(){


  const [money,setMoney] = useState("");



  const goldPrice = 7950000;



  const gold =

    money

    ?

    (
      Number(money.replace(/,/g,""))

      /

      goldPrice

    ).toFixed(3)

    :

    "0";




  return (


    <section className="convert-container">



      <div className="convert-card">



        <h3>

          تبدیل پول به طلا

        </h3>



        <input


          type="text"


          placeholder="مبلغ تومان"


          value={money}


          onChange={

            (e)=>

            setMoney(e.target.value)

          }


        />



        <div className="convert-result">


          مقدار طلا:

          <strong>

            {gold} گرم

          </strong>


        </div>



      </div>





      <div className="convert-card reverse">



        <h3>

          تبدیل طلا به پول

        </h3>



        <input


          type="number"


          placeholder="وزن طلا (گرم)"


        />



        <div className="convert-result">


          ارزش تقریبی:

          <strong>

            0 تومان

          </strong>


        </div>



      </div>




    </section>


  );


}


export default ConvertBox;

import "./styles/wallet.css";


function Wallet(){

  return (

    <section className="wallet">

      <h2>
        کیف طلای من
      </h2>


      <div className="wallet-card">


        <div>
          <span>
            موجودی طلا
          </span>

          <strong>
            25 گرم
          </strong>
        </div>


        <div>
          <span>
            ارزش لحظه‌ای
          </span>

          <strong>
            187,500,000 تومان
          </strong>
        </div>


        <div>
          <span>
            سود امروز
          </span>

          <strong className="profit">
            +2.4%
          </strong>
        </div>


      </div>


    </section>

  );

}


export default Wallet;

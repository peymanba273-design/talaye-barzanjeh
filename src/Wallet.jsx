import "./wallet.css";


function Wallet(){

  return (

    <section className="wallet-box">


      <div className="wallet-title">

        <h2>
          کیف طلای من
        </h2>

        <span>
          موجودی امن
        </span>

      </div>



      <div className="wallet-content">


        <div className="wallet-item">

          <p>
            موجودی طلا
          </p>

          <strong>
            ۱۲.۵ گرم
          </strong>

        </div>



        <div className="wallet-item">

          <p>
            ارزش دارایی
          </p>

          <strong>
            ۹۸,۱۲۵,۰۰۰ تومان
          </strong>

        </div>



        <div className="wallet-item profit">

          <p>
            سود امروز
          </p>

          <strong>
            +۲.۸٪
          </strong>

        </div>


      </div>



      <button className="wallet-button">

        مشاهده کیف پول

      </button>


    </section>

  );

}


export default Wallet;

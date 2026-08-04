import "./wallet.css";


function WalletPage(){

  const transactions = [

    {
      title:"خرید طلا",
      amount:"+۲ گرم",
      date:"امروز"
    },

    {
      title:"فروش طلا",
      amount:"-۰.۵ گرم",
      date:"دیروز"
    }

  ];


  return (

    <section className="wallet-page">


      <h1>
        کیف پول طلا
      </h1>



      <div className="wallet-summary">


        <div>

          <span>
            موجودی طلا
          </span>

          <strong>
            ۱۲.۵ گرم
          </strong>

        </div>



        <div>

          <span>
            ارزش دارایی
          </span>

          <strong>
            ۹۸,۱۲۵,۰۰۰ تومان
          </strong>

        </div>


      </div>




      <div className="wallet-actions">


        <button>
          خرید طلا
        </button>


        <button>
          فروش طلا
        </button>


      </div>





      <div className="transactions">


        <h2>
          آخرین تراکنش‌ها
        </h2>



        {
          transactions.map((item,index)=>(

            <div 
            className="transaction"
            key={index}
            >


              <span>
                {item.title}
              </span>


              <strong>
                {item.amount}
              </strong>


              <small>
                {item.date}
              </small>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default WalletPage;

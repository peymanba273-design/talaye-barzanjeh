function Transactions() {

  const transactions = [

    {
      id: 1,
      type: "خرید",
      amount: "2.50 گرم",
      price: "19,850,000 تومان",
      date: "1405/05/12",
      color: "#27AE60"
    },

    {
      id: 2,
      type: "فروش",
      amount: "1.00 گرم",
      price: "7,950,000 تومان",
      date: "1405/05/10",
      color: "#E74C3C"
    },

    {
      id: 3,
      type: "خرید",
      amount: "5.00 گرم",
      price: "39,500,000 تومان",
      date: "1405/05/05",
      color: "#27AE60"
    }

  ];


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#fff",
        padding: "20px"
      }}
    >

      <h1
        style={{
          color: "#D4AF37",
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        تاریخچه تراکنش‌ها
      </h1>


      {

        transactions.map((item)=>(

          <div

            key={item.id}

            style={{

              background:"#171717",

              border:"1px solid #2b2b2b",

              borderRadius:"18px",

              padding:"20px",

              marginBottom:"18px"

            }}

          >

            <div

              style={{

                display:"flex",

                justifyContent:"space-between",

                alignItems:"center"

              }}

            >

              <strong
                style={{
                  color:item.color
                }}
              >
                {item.type}
              </strong>

              <span
                style={{
                  color:"#999"
                }}
              >
                {item.date}
              </span>

            </div>


            <div
              style={{
                marginTop:"15px"
              }}
            >

              <div>
                مقدار:
                <strong
                  style={{
                    color:"#D4AF37",
                    marginRight:"8px"
                  }}
                >
                  {item.amount}
                </strong>
              </div>


              <div
                style={{
                  marginTop:"10px"
                }}
              >
                مبلغ:
                <strong
                  style={{
                    color:"#fff",
                    marginRight:"8px"
                  }}
                >
                  {item.price}
                </strong>
              </div>

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default Transactions;

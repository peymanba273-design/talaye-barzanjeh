function News() {

  const news = [

    {
      id:1,
      title:"رشد قیمت جهانی طلا",
      text:"امروز قیمت جهانی طلا با افزایش ۱.۸ درصدی همراه شد.",
      source:"Reuters",
      time:"۱۰ دقیقه پیش"
    },

    {
      id:2,
      title:"افزایش تقاضا در بازار ایران",
      text:"تقاضا برای خرید طلای ۱۸ عیار در بازار داخلی افزایش یافت.",
      source:"ایرنا",
      time:"۱ ساعت پیش"
    },

    {
      id:3,
      title:"پیش‌بینی تحلیلگران",
      text:"کارشناسان احتمال ادامه روند صعودی طلا را مطرح کردند.",
      source:"Bloomberg",
      time:"۳ ساعت پیش"
    }

  ];



  return(

    <div
    style={{

      background:"#090909",

      minHeight:"100vh",

      padding:"20px",

      color:"white"

    }}
    >

      <h1
      style={{

        textAlign:"center",

        color:"#D4AF37",

        marginBottom:"30px"

      }}
      >

        اخبار بازار

      </h1>


      {

        news.map(item=>(

          <div

          key={item.id}

          style={{

            background:"#171717",

            borderRadius:"20px",

            padding:"22px",

            marginBottom:"20px",

            border:"1px solid #2d2d2d"

          }}

          >

            <h2
            style={{

              color:"#D4AF37",

              fontSize:"20px"

            }}
            >

              {item.title}

            </h2>


            <p
            style={{

              marginTop:"15px",

              color:"#ddd",

              lineHeight:"1.8"

            }}
            >

              {item.text}

            </p>



            <div

            style={{

              display:"flex",

              justifyContent:"space-between",

              marginTop:"20px",

              color:"#888"

            }}

            >

              <span>{item.source}</span>

              <span>{item.time}</span>

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default News;

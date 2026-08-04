function Home(){

  return(

    <div
      style={{
        minHeight:"100vh",
        background:"#090909",
        color:"white",
        padding:"25px"
      }}
    >


      <section
        style={{
          background:
          "linear-gradient(135deg,#1a1a1a,#111)",
          borderRadius:"30px",
          padding:"35px",
          border:
          "1px solid rgba(212,175,55,.35)",
          boxShadow:
          "0 0 35px rgba(212,175,55,.15)"
        }}
      >

        <p
          style={{
            color:"#aaa",
            marginBottom:"10px"
          }}
        >
          ارزش کل دارایی
        </p>


        <h1
          style={{
            color:"#D4AF37",
            fontSize:"36px"
          }}
        >
          98,125,000 تومان
        </h1>


        <div
          style={{
            marginTop:"25px",
            display:"flex",
            gap:"15px",
            flexWrap:"wrap"
          }}
        >

          <button className="gold-btn">
            خرید طلا
          </button>


          <button className="dark-btn">
            فروش طلا
          </button>


        </div>


      </section>




      <section

      style={{

        marginTop:"30px",

        display:"grid",

        gridTemplateColumns:
        "repeat(auto-fit,minmax(180px,1fr))",

        gap:"20px"

      }}

      >


        <Card

        title="طلای ۱۸ عیار"

        value="7,950,000"

        />


        <Card

        title="اونس جهانی"

        value="3,350$"

        />


        <Card

        title="موجودی طلا"

        value="12.50 گرم"

        />


      </section>



      <section

      style={{

        marginTop:"30px",

        background:"#171717",

        borderRadius:"25px",

        padding:"25px"

      }}

      >

        <h2
        style={{
          color:"#D4AF37"
        }}
        >
          آخرین فعالیت‌ها
        </h2>


        <p>
          خرید 2 گرم طلا انجام شد
        </p>

        <p>
          قیمت طلا به‌روزرسانی شد
        </p>


      </section>


    </div>

  );

}



function Card({title,value}){


return(

<div

style={{

background:"#171717",

borderRadius:"20px",

padding:"20px",

border:
"1px solid #292929"

}}

>

<p
style={{
color:"#888"
}}
>
{title}
</p>


<strong

style={{

color:"#D4AF37",

fontSize:"22px"

}}

>

{value}

</strong>


</div>

);


}



export default Home;

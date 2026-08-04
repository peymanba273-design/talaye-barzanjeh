import BarzanjehLogo from "./BarzanjehLogo.jsx";


function Header(){

  return(

    <header

      style={{

        height:"90px",

        padding:"10px 18px",

        display:"flex",

        alignItems:"center",

        justifyContent:"space-between",

        background:"rgba(255,255,255,0.28)",

        backdropFilter:"blur(20px)",

        borderBottom:"1px solid rgba(184,134,11,.25)"

      }}

    >


      <div

        style={{

          display:"flex",

          alignItems:"center",

          gap:"12px"

        }}

      >


        <BarzanjehLogo />

<div
  style={{
    width:"55px",
    height:"55px",
    overflow:"hidden",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }}
>

  <BarzanjehLogo />

</div>

            Barzanjeh Gold

          </h1>



          <span

            style={{

              color:"#63452d",

              fontSize:"12px"

            }}

          >

            طلا | سرمایه | اعتماد

          </span>



        </div>


      </div>





      <button

        style={{

          width:"36px",

          height:"36px",

          borderRadius:"50%",

          border:"1px solid rgba(184,134,11,.4)",

          background:"rgba(255,255,255,.35)",

          color:"#b8860b",

          fontSize:"18px"

        }}

      >

        ⚙

      </button>



    </header>

  );

}


export default Header;

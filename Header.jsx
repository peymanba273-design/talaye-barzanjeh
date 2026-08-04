function Header(){

  return(

    <header

      style={{

        height:"75px",

        padding:"0 20px",

        display:"flex",

        alignItems:"center",

        justifyContent:"space-between",

        background:"#111",

        borderBottom:"1px solid rgba(212,175,55,.3)",

        color:"white"

      }}

    >


      <div

      style={{

        display:"flex",

        alignItems:"center",

        gap:"10px"

      }}

      >

        <div

        style={{

          width:"45px",

          height:"45px",

          borderRadius:"50%",

          background:"linear-gradient(135deg,#D4AF37,#F7E7A9)",

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          color:"#111",

          fontWeight:"bold",

          fontSize:"25px"

        }}

        >

          B

        </div>


        <span

        style={{

          color:"#D4AF37",

          fontSize:"20px",

          fontWeight:"bold"

        }}

        >

          Barzanjeh Gold

        </span>


      </div>



      <div

      style={{

        color:"#D4AF37",

        fontSize:"24px",

        cursor:"pointer"

      }}

      >

        🔔

      </div>


    </header>

  );

}


export default Header;

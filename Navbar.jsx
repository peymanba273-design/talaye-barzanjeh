function Navbar({page,setPage}){


  const items=[

    {
      id:"home",
      title:"خانه",
      icon:"⌂"
    },


    {
      id:"market",
      title:"بازار",
      icon:"◈"
    },


    {
      id:"wallet",
      title:"کیف پول",
      icon:"▣"
    },


    {
      id:"profile",
      title:"پروفایل",
      icon:"●"
    },


    {
      id:"notifications",
      title:"اعلان",
      icon:"🔔"
    },


    {
      id:"transactions",
      title:"تراکنش",
      icon:"↔"
    },


    {
      id:"news",
      title:"اخبار",
      icon:"◉"
    }

  ];



  return(

    <nav

    style={{

      position:"fixed",

      bottom:0,

      left:0,

      width:"100%",

      height:"75px",

      background:"#111",

      display:"flex",

      justifyContent:"space-around",

      alignItems:"center",

      borderTop:
      "1px solid rgba(212,175,55,.3)",

      zIndex:1000,

      overflowX:"auto"

    }}

    >


      {

      items.map(item=>(


        <div

        key={item.id}

        onClick={()=>setPage(item.id)}

        style={{

          minWidth:"70px",

          textAlign:"center",

          cursor:"pointer",

          color:

          page===item.id

          ?

          "#D4AF37"

          :

          "#888"


        }}

        >


          <div

          style={{

            fontSize:"22px"

          }}

          >

            {item.icon}

          </div>


          <small>

            {item.title}

          </small>


        </div>


      ))

      }


    </nav>

  );

}


export default Navbar;

import "./navbar.css";


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
    }

  ];



  return(

    <nav className="navbar">


      {

        items.map(item=>(

          <div

          key={item.id}

          className={

            page===item.id

            ?

            "nav-item active"

            :

            "nav-item"

          }


          onClick={()=>setPage(item.id)}

          >


            <span className="nav-icon">

              {item.icon}

            </span>


            <span className="nav-title">

              {item.title}

            </span>


          </div>


        ))

      }


    </nav>

  );

}


export default Navbar;

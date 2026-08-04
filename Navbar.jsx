import "./navbar.css";


function Navbar({setPage,page}){


  const items=[

    {
      name:"home",
      title:"خانه",
      icon:"/assets/home.svg"
    },

    {
      name:"market",
      title:"بازار",
      icon:"/assets/market.svg"
    },

    {
      name:"wallet",
      title:"کیف پول",
      icon:"/assets/wallet.svg"
    },

    {
      name:"settings",
      title:"تنظیمات",
      icon:"/assets/settings.svg"
    }

  ];



  return (

    <nav className="bottom-navbar">


      {
        items.map((item)=>(


          <div

          key={item.name}

          onClick={()=>setPage(item.name)}

          className={
            page===item.name
            ?
            "nav-item active"
            :
            "nav-item"
          }


          >


            <img 
            src={item.icon}
            />


            <span>
              {item.title}
            </span>


          </div>


        ))
      }


    </nav>

  );

}


export default Navbar;

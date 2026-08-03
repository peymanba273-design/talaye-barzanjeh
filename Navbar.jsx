import "./navbar.css";


function Navbar(){

  const items = [

    {
      title:"خانه",
      icon:"/assets/home.svg"
    },

    {
      title:"بازار",
      icon:"/assets/market.svg"
    },

    {
      title:"کیف پول",
      icon:"/assets/wallet.svg"
    },

    {
      title:"تنظیمات",
      icon:"/assets/settings.svg"
    }

  ];


  return (

    <nav className="bottom-navbar">


      {
        items.map((item,index)=>(

          <div 
          className={
            index===0 
            ? "nav-item active"
            : "nav-item"
          }

          key={index}
          >


            <img 
            src={item.icon}
            alt={item.title}
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

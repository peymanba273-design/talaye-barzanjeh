import "./Navbar.css";

function Navbar({ page, setPage }) {

  const items = [

    {
      id: "market",
      title: "بازار",
      icon: "📈"
    },

    {
      id: "wallet",
      title: "کیف پول",
      icon: "💼"
    },

    {
      id: "home",
      title: "خانه",
      icon: "⌂",
      home: true
    },

    {
      id: "transactions",
      title: "تراکنش",
      icon: "💳"
    },

    {
      id: "news",
      title: "اخبار",
      icon: "📰"
    }

  ];

  return (

    <nav className="bottom-nav">

      {

        items.map(item => (

          <div

            key={item.id}

            onClick={() => setPage(item.id)}

            className={
              item.home
                ? `nav-item home-item ${page === item.id ? "active" : ""}`
                : `nav-item ${page === item.id ? "active" : ""}`
            }

          >

            <div className="nav-icon">
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

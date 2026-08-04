import { useState } from "react";

function Search() {

  const [search, setSearch] = useState("");

  const items = [

    "طلای 18 عیار",

    "طلای 24 عیار",

    "سکه امامی",

    "نیم سکه",

    "ربع سکه",

    "اونس جهانی",

    "دلار",

    "یورو"

  ];


  const result = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );


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
          textAlign: "center",
          color: "#D4AF37",
          marginBottom: "25px"
        }}
      >
        جستجو
      </h1>


      <input

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        placeholder="جستجو..."

        style={{

          width:"100%",

          padding:"18px",

          borderRadius:"18px",

          border:"1px solid #D4AF37",

          background:"#171717",

          color:"white",

          fontSize:"16px",

          outline:"none"

        }}

      />


      <div
        style={{
          marginTop:"25px"
        }}
      >

        {

          result.map((item,index)=>(

            <div

            key={index}

            style={{

              background:"#171717",

              borderRadius:"18px",

              padding:"18px",

              marginBottom:"15px",

              border:"1px solid #2d2d2d",

              cursor:"pointer"

            }}

            >

              {item}

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Search;

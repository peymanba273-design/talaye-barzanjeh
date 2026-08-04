import React from "react";
import ReactDOM from "react-dom/client";

function App(){

  return (
    <div style={{
      background:"#000",
      color:"#d4af37",
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"40px"
    }}>
      Barzanjeh Gold
    </div>
  );

}


ReactDOM
.createRoot(document.getElementById("root"))
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

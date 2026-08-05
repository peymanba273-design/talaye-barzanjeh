
import express from "express";
import cors from "cors";
import fetchPrices from "./priceFetcher.js";


const app = express();


app.use(cors());

app.use(express.json());



app.get("/", (req,res)=>{


  res.json({

    status:"Barzanjeh Gold API is running"

  });


});





app.get("/api/prices", async (req,res)=>{


  try{


    const prices = await fetchPrices();


    res.json(prices);



  }

  catch(error){


    res.status(500).json({

      error:"Price service error"

    });


  }



});





const PORT = 5000;



app.listen(PORT,()=>{


  console.log(

    `Backend running on port ${PORT}`

  );


});

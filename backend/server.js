import express from "express";
import cors from "cors";

import { fetchPrices } from "./priceFetcher.js";


const app = express();


app.use(cors());

app.use(express.json());





app.get("/",(req,res)=>{


  res.json({

    status:"Barzanjeh Gold Backend Running"

  });


});






app.get("/api/prices",async(req,res)=>{


  try{


    const prices = await fetchPrices();



    if(!prices){


      return res.status(503).json({

        error:"Price source unavailable"

      });


    }




    res.json(prices);



  }


  catch(error){


    res.status(500).json({

      error:error.message

    });


  }


});







const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


  console.log(

    `Barzanjeh Backend running on ${PORT}`

  );


});

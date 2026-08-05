import axios from "axios";
import fs from "fs";


const CACHE_FILE = "./cache.json";





function saveCache(data){


  fs.writeFileSync(

    CACHE_FILE,

    JSON.stringify(data,null,2)

  );


}





function loadCache(){


  try{


    const data = fs.readFileSync(

      CACHE_FILE,

      "utf8"

    );


    return JSON.parse(data);


  }


  catch{


    return null;

  }


}






// منبع اصلی - بعداً endpoint واقعی قرار می‌گیرد

async function getTGJU(){


  try{


    /*
      اینجا API واقعی TGJU قرار می‌گیرد

      const res = await axios.get(
        "TGJU_API_URL"
      );

      return res.data;

    */


    throw new Error("TGJU not connected yet");


  }


  catch(error){


    return null;


  }


}






// منبع دوم

async function getBackupSource(){


  try{


    /*
      منبع پشتیبان

      مثل Gold API یا منبع دیگر

    */


    throw new Error("Backup not connected yet");


  }


  catch{


    return null;


  }


}






export async function fetchPrices(){


  let prices;



  // اول TGJU

  prices = await getTGJU();



  // اگر نبود منبع دوم

  if(!prices){


    prices = await getBackupSource();


  }





  // اگر یکی جواب داد ذخیره کن

  if(prices){


    saveCache(prices);


    return {

      ...prices,

      source:"online"

    };


  }





  // اگر همه قطع بودند

  const cache = loadCache();



  if(cache){


    return {

      ...cache,

      source:"cache"

    };


  }





  return null;


}

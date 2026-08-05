
import fs from "fs";
import path from "path";


const cachePath = path.join(
  process.cwd(),
  "cache.json"
);



function readCache(){

  try{

    const data = fs.readFileSync(
      cachePath,
      "utf-8"
    );

    return JSON.parse(data);

  }

  catch(error){

    return {

      gold18:0,
      gold24:0,
      coin:0,
      dollar:0,
      ounce:0,
      updated:""

    };

  }

}




function saveCache(data){

  fs.writeFileSync(

    cachePath,

    JSON.stringify(
      data,
      null,
      2
    )

  );

}




async function fetchPrices(){


  /*
    اینجا بعداً API واقعی قرار می‌گیرد

    مثال:

    API طلا
    یا سایت ایرانی
    یا ربات تلگرام

  */


  const oldData = readCache();



  const newData={

    ...oldData,

    updated:
    new Date().toISOString()

  };



  saveCache(newData);



  return newData;


}



export default fetchPrices;

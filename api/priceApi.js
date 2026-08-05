const API_URL = "";


export async function getPrices(){


  try{


    // وقتی API واقعی پیدا شد این قسمت فعال می‌شود

    if(API_URL){


      const response = await fetch(API_URL);


      const data = await response.json();


      return data;


    }



    // داده موقت برای تست اتصال

    return {

      gold18:7950000,

      gold24:10600000,

      mesghal:34500000,

      coin:85000000,

      halfCoin:45000000,

      quarterCoin:25000000,

      dollar:160000,

      ounce:3350

    };


  }


  catch(error){


    console.log(
      "Price API Error:",
      error
    );


    return null;


  }


}

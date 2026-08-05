const API_URL =
"https://talaye-barzanjeh.peymanba273.workers.dev/api/prices";



export async function getPrices(){


  try{


    const response = await fetch(API_URL);



    if(!response.ok){

      throw new Error(
        "Price API failed"
      );

    }



    const data = await response.json();



    return data;



  }


  catch(error){


    console.log(
      "Price API Error:",
      error
    );



    return null;


  }


}

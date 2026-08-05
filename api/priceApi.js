export async function getPrices(){

  try{


    const response = await fetch(
      "API_ADDRESS_HERE"
    );


    const data =
    await response.json();


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

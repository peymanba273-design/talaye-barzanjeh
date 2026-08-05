export default {

  async fetch(request) {

    const url = new URL(request.url);


    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Content-Type": "application/json; charset=utf-8"
    };


    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers
      });
    }



    if (url.pathname === "/") {

      return new Response(

        JSON.stringify({

          name: "Barzanjeh Gold API",

          status: "online",

          version: "1.0.0"

        }),

        { headers }

      );

    }



    if (url.pathname === "/api/prices") {


      const data = {


        gold18: 7950000,

        gold24: 10600000,

        mesghal: 34500000,

        coin: 85000000,

        halfCoin: 45000000,

        quarterCoin: 25000000,

        dollar: 160000,

        ounce: 3350,


        updated: new Date().toISOString()


      };



      return new Response(

        JSON.stringify(data),

        { headers }

      );


    }



    return new Response(

      JSON.stringify({

        error:"Not Found"

      }),

      {
        status:404,
        headers
      }

    );


  }

};

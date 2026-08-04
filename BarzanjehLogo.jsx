import React from "react";


function BarzanjehLogo(){


return (

<svg

xmlns="http://www.w3.org/2000/svg"

width="90"

height="90"

viewBox="0 0 600 600"

>


<defs>


<radialGradient id="glassDisc">

<stop offset="0%" stopColor="#2e2b26"/>

<stop offset="60%" stopColor="#0a0908"/>

<stop offset="100%" stopColor="#020202"/>

</radialGradient>



<linearGradient id="gold">

<stop offset="0%" stopColor="#fff3d6"/>

<stop offset="35%" stopColor="#e8c565"/>

<stop offset="70%" stopColor="#b8860b"/>

<stop offset="100%" stopColor="#6b4e18"/>

</linearGradient>



<filter id="shadow">

<feGaussianBlur stdDeviation="10"/>

</filter>


</defs>



<circle

cx="300"

cy="300"

r="240"

fill="url(#glassDisc)"

stroke="url(#gold)"

strokeWidth="18"

/>



<text

x="300"

y="430"

textAnchor="middle"

fontSize="520"

fontWeight="900"

fontFamily="serif"

fill="url(#gold)"

stroke="#6b4e18"

strokeWidth="8"

filter="url(#shadow)"

>

B

</text>



<text

x="300"

y="430"

textAnchor="middle"

fontSize="520"

fontWeight="900"

fontFamily="serif"

fill="url(#gold)"

stroke="#6b4e18"

strokeWidth="5"

>

B

</text>



</svg>


);


}


export default BarzanjehLogo;

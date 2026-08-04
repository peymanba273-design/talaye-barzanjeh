import React from "react";

function BarzanjehLogo(){

return (

<svg
xmlns="http://www.w3.org/2000/svg"
width="600"
height="600"
viewBox="0 0 600 600"
>

<defs>

<path id="letterB" d="M55,-0 L55,-33 Q94,-33 108,-49 Q123,-66 123,-94 L123,-580 Q123,-606 123,-625 Q123,-645 127,-658 Q109,-658 91,-658 L55,-658 L55,-701 Q109,-701 165,-701 Q220,-701 280,-701 Q396,-701 461,-660 Q527,-619 527,-530 Q527,-498 508,-466 Q489,-434 453,-409 Q416,-385 361,-375 Q471,-375 527,-324 Q583,-273 583,-196 Q583,-135 552,-91 Q521,-47 468,-23 Q415,0 347,0 Z" />


<radialGradient id="glassDisc" cx="38%" cy="32%" r="75%">

<stop offset="0%" stopColor="#2e2b26"/>

<stop offset="35%" stopColor="#181614"/>

<stop offset="75%" stopColor="#0a0908"/>

<stop offset="100%" stopColor="#020202"/>

</radialGradient>



<linearGradient id="bezelGrad" x1="15%" y1="8%" x2="85%" y2="95%">

<stop offset="0%" stopColor="#fff3d6"/>

<stop offset="22%" stopColor="#e8c565"/>

<stop offset="50%" stopColor="#b8860b"/>

<stop offset="78%" stopColor="#6b4e18"/>

<stop offset="100%" stopColor="#33240a"/>

</linearGradient>



<linearGradient id="goldLetterGlass" x1="0%" y1="0%" x2="0%" y2="100%">

<stop offset="0%" stopColor="#fbeec2"/>

<stop offset="30%" stopColor="#e8c565"/>

<stop offset="65%" stopColor="#c99a2e"/>

<stop offset="100%" stopColor="#8a651e"/>

</linearGradient>



<radialGradient id="shadowGrad">

<stop offset="0%" stopColor="#000" stopOpacity="0.5"/>

<stop offset="70%" stopColor="#000" stopOpacity="0.28"/>

<stop offset="100%" stopColor="#000" stopOpacity="0"/>

</radialGradient>



<filter id="blurL">

<feGaussianBlur stdDeviation="16"/>

</filter>


<filter id="blurM">

<feGaussianBlur stdDeviation="7"/>

</filter>


<filter id="blurS">

<feGaussianBlur stdDeviation="1.2"/>

</filter>


<clipPath id="discClip">

<circle cx="300" cy="300" r="246"/>

</clipPath>


<clipPath id="letterClip">

<use href="#letterB"/>

</clipPath>


</defs><ellipse
cx="300"
cy="322"
rx="270"
ry="258"
fill="url(#shadowGrad)"
filter="url(#blurL)"
/>


<circle
cx="300"
cy="300"
r="246"
fill="url(#glassDisc)"
stroke="url(#bezelGrad)"
strokeWidth="15"
/>



<g clipPath="url(#discClip)">


<circle
cx="300"
cy="300"
r="246"
fill="rgba(255,255,255,0.05)"
/>



<circle
cx="300"
cy="300"
r="246"
fill="none"
stroke="#fff3d6"
strokeOpacity="0.15"
strokeWidth="3"
/>



<ellipse

cx="235"

cy="215"

rx="150"

ry="120"

fill="#ffffff"

opacity="0.18"

filter="url(#blurM)"

/>



<ellipse

cx="205"

cy="178"

rx="34"

ry="20"

fill="#ffffff"

opacity="0.55"

filter="url(#blurS)"

transform="rotate(-25 205 178)"

/>



</g>




<circle

cx="300"

cy="300"

r="230"

fill="none"

stroke="url(#bezelGrad)"

strokeWidth="1.4"

opacity="0.6"

/>




<g

stroke="#e8c565"

strokeWidth="2"

fill="none"

strokeLinecap="round"

opacity="0.85"

>


<line

x1="185"

y1="135"

x2="272"

y2="135"

/>


<line

x1="328"

y1="135"

x2="415"

y2="135"

/>


<line

x1="185"

y1="465"

x2="272"

y2="465"

/>


<line

x1="328"

y1="465"

x2="415"

y2="465"

/>



</g>




<rect

x="292"

y="127"

width="16"

height="16"

fill="#e8c565"

opacity="0.9"

transform="rotate(45 300 135)"

/>



<rect

x="292"

y="457"

width="16"

height="16"

fill="#e8c565"

opacity="0.9"

transform="rotate(45 300 465)"

/>id="8x7q1k"
<g transform="translate(196.04,433) scale(0.35663)">


<ellipse

cx="291.5"

cy="390.5"

rx="361.5"

ry="385.6"

fill="#000000"

opacity="0.35"

filter="url(#blurM)"

transform="translate(16.82,28.04)"

/>



<use

href="#letterB"

x="16.68"

y="19.19"

fill="#3a2a0d"

/>


<use

href="#letterB"

x="14.30"

y="16.45"

fill="#43300e"

/>


<use

href="#letterB"

x="11.92"

y="13.70"

fill="#4c3710"

/>


<use

href="#letterB"

x="9.53"

y="10.96"

fill="#553e11"

/>


<use

href="#letterB"

x="7.15"

y="8.22"

fill="#5e4513"

/>


<use

href="#letterB"

x="4.77"

y="5.48"

fill="#674c14"

/>


<use

href="#letterB"

x="2.38"

y="2.74"

fill="#705316"

/>



<use

href="#letterB"

fill="url(#goldLetterGlass)"

stroke="#6b4e18"

strokeWidth="4.486"

/>



<g clipPath="url(#letterClip)">


<rect

x="-50"

y="-751"

width="683"

height="294"

fill="#ffffff"

opacity="0.30"

transform="rotate(-18 291.5 -490.7)"

/>



<rect

x="-50"

y="-315"

width="683"

height="112"

fill="#ffffff"

opacity="0.14"

transform="rotate(-18 291.5 -280.4)"

/>


</g>


</g>



</svg>

);


}



export default BarzanjehLogo;

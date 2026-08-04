import Navbar from "./Navbar.jsx";

function Layout({

page,

children,

setPage

}){

return(

<div
style={{

minHeight:"100vh",

background:"#090909",

display:"flex",

flexDirection:"column"

}}
>

<div
style={{

flex:1

}}
>

{children}

</div>

<Navbar

page={page}

setPage={setPage}

/>

</div>

);

}

export default Layout;

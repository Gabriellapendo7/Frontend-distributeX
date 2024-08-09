import React from "react";
import DashboardContent from "./Dashboard";
import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Sidebar from "./Sidebar";



function Home(){
    return(
        <div>
           <Navbar/>
           {/* <Sidebar/> */}
           <DashboardContent/>
           {/* <Footer/> */}
        </div>
    )
}
export default Home;
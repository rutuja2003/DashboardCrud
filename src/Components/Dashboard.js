import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <>
 
        <Header></Header>
        <div className="row">
        <div className="col-md-2">
        <SideBar></SideBar>
        </div>
        <div className="col-md-10">
            <Outlet></Outlet>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
}export default Dashboard;
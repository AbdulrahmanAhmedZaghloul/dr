import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SocialMediaLinks from "../SocialMediaLinks";
export default function Layout() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mx-auto">
        <SocialMediaLinks/>
        <Outlet className="py-10 mx-auto"></Outlet>
      </div>
      <Footer />
    </React.Fragment>
  );
}

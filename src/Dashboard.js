import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import Search from "./Search";
import Slideshow from "./Slideshow";
import Topbar from "./Topbar";

function Dashboard() {
  return (
    <>
      <div style={{backgroundColor:"#101820FF"}}>
      <Topbar />
      <Slideshow />
      <Intro />
      <Search />
      <Contact/>
      <Footer />
      </div>
    </>
  );
}

export default Dashboard;

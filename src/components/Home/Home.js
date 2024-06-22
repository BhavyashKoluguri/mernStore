import React from "react";
import Links from "../Links/Links";
import MainContent from "../MainContent/MainContent";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="app">
      <div className="app_name">
        <SideBar />
        <MainContent />
      </div>
      <Links />
      <Footer />
    </div>
  );
};

export default Home;

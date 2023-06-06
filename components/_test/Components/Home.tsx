import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Head from "next/head";

const Home = () => {
  return (
    <div className="home-container">
      <Head>
        <link rel="stylesheet" href="app.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={"Assets/home-banner-background.png"} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={"Assets/home-banner-image.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

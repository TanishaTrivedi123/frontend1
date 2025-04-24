import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import WhyJoinUs from "../components/WhyJoinUs";
import HomeCard from "../components/HomePageCard/HomeCard";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <WhyJoinUs />
        <HomeCard />
      </main>
    </>
  );
};

export default Home;

import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Service from "./Service";
import Support from "./Support";
import Entreprise from "./Entreprise";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Support />
      <Entreprise />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;

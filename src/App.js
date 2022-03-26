import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PutEarnOffer from "./pages/PutEarnOffer.js";
import PutRedeemOffer from "./pages/PutRedeemOffer.js";
import EarnOffers from "./pages/EarnOffers.js";
import RedeemOffers from "./pages/RedeemOffers.js";
import MyDashboard from "./pages/MyDashboard.js";
import Footer from "./pages/Footer.js";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About";
import SignUp from "./pages/SignUp.js";
import Install from "./pages/Install";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <div class=" py-3 px-3 ">
      {/* </div> <div class=" py-3 contianer"> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/putearnoffer" element={<PutEarnOffer />} />
          <Route path="/putredeemoffer" element={<PutRedeemOffer />} />
          <Route path="/earnoffers" element={<EarnOffers />} />
          <Route path="/redeemoffers" element={<RedeemOffers />} />
          <Route path="/mydashboard" element={<MyDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/install" element={<Install />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

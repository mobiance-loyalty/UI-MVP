import React from "react";
import { Link } from "react-router-dom";
import page404 from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/404.png";

export default function PageNotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${page404})`,
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="text-center">Whoops!</h1>
        <br />
        <br />
        <h4 className="text-center">404 &nbsp; Page Not Found</h4>
        <h4 className="text-center">
          We can't find the page you are looking for
        </h4>
      </div>
      <br />

      <div className="text-center">
        <Link to="/">
          <button className="btn btn-primary btn-lg">Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}

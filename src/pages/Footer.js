import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/mobiance-logo.png";

const Footer = () => {
  return (
    <div >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; 2022 Mobiance, Inc</p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img className="bi mb-4" src={logo} alt="" width="120" height="40" />{" "}
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/SignUp">
              SignUp
            </Link>
          </li>
        </ul>
      </footer>{" "}
    </div>
  );
};

export default Footer;

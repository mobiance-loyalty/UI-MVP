import { Link } from "react-router-dom";
import  "./Header.css"
const Header = () => {
  return (
    <div >
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="nav-link btn cd-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none btn-large"
        >
          <span className="fs-4">Mobiance</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            {" "}
            <Link
              className="nav-link btn btn-primary font-weight-bold"
              to="/signup"
            >
              Sign up{" "}
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link btn btn-primary " to="/mydashboard">
              My Dashboard
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link btn btn-primary" to="/putearnoffer">
              Put Earn Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary" to="/putredeemoffer">
              Put Redeem Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary" to="/earnoffers">
              Earn Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary" to="/redeemoffers">
              Redeem Offers
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

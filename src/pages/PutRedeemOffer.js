import mobiance from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/mobiance-logo.png";

import "./PutRedeemOffer.css";

export default function PutRedeemOffer() {
  return (
    <div style={{minHeight:'100vh'}} >
      <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={mobiance}
          alt=""
          width="170"
          height="72"
        />
        <h2>Put your redeem offer here</h2>
        <p className="lead">please fill the blanks and send your offer.</p>
      </div>

      <div className="row">
        <div className="col-md-8 order-md-1">
          <form className="needs-validation" novalidate />
          <div className="row">
            <div className="col-md mb-3">
              <label for="firstName">Wallet Address</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid Wallet Address is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="username">Mobiance Name Service</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="MNS"
                placeholder="MNS"
                required
              />
              <div className="invalid-feedback" style={{ width: "100%" }}>
                Your MNS is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="OfferName">
              Offer Name <span className="text-muted">(*)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="offerName"
              placeholder="pay the bills"
            />
            <div className="invalid-feedback">Please enter an offer name.</div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <label for="NoOffers">Number of Offers</label>
              <select
                className="custom-select d-block w-100"
                id="Number of Offers"
                required
              >
                <option value="">Choose...</option>
                <option>less than 50 </option>
                <option>less than 100</option>
                <option>less than 1000</option>
              </select>
              <div className="invalid-feedback">Please select a valid country.</div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="ExpiryDate">Expiry Date</label>
              <select
                className="custom-select d-block w-100"
                id="Expiry Date"
                required
              >
                <option value="">Choose...</option>
                <option>Within one year</option>
                <option>Open Ended</option>
              </select>
              <div className="invalid-feedback">Please provide a valid state.</div>
            </div>
          </div>

          <div className="mb-3">
            <label for="MLTperOffer">MLT per offer</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="MLTperOffer"
                placeholder="#MLT"
                required
              />
              <div className="invalid-feedback" style={{ width: "100%" }}>
                This field is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="Additional Information">
              Additional Information <span className="text-muted">(*)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="AdditionalInformatin"
              placeholder="Any important situation that a customer should be aware of"
            />
            <div className="invalid-feedback">Please enter an offer name.</div>
          </div>

          <br />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="save-info"
            />
            <label className="custom-control-label" for="save-info">
              Save this information for next time
            </label>
          </div>
          <br />

          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue to put the offer
          </button>
        
        </div>
      </div>
    </div>
  );
}

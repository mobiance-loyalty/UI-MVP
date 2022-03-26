import adidas from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/Adidas_Logo.png";
import Card from "./Card.js";

const RedeemOffers = () => {
  return (
    <div className="container" style={{minHeight:'100vh'}}>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Card title="Adidas" text="You should pay 5 MLT." src={adidas} />
        <Card title="Adidas" text="You should pay 5 MLT." src={adidas} />
        <Card title="Adidas" text="You should pay 5 MLT." src={adidas} />
        <Card title="Adidas" text="You should pay 5 MLT." src={adidas} />
      </div>
    </div>
  );
};

export default RedeemOffers;

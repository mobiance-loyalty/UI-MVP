import React from "react";
import { useState } from "react";
import { Layout, Typography } from "antd";
import { ethers, providers } from "ethers";
import { mltAddress } from "../config.js";
import MLT from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/artifacts/contracts/MLT.sol/MLT.json";
import CardDashboard from "./CardDashboard.js";
import adidas from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/Adidas_Logo.png";

const { Content } = Layout;
const { Title } = Typography;

export default function MyDashboard() {
  // async function getOffers(){}
  const [balance, setBalance] = useState();
  
  async function getBalance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const mltContract = new ethers.Contract(mltAddress, MLT.abi, signer);
    // const [account] = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    const balance = await mltContract.balanceOf(signer.getAddress());

    // const [account] = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }

  return (
    // ToDo: two part my balance and my offers
    <div>
      <Layout
        style={{ background: "#D6E5FA", minHeight: "140vh"}}
        className="rounded-3"
      >
        <Content style={{ padding: "20px 20px"}}>
          <Title style={{ color: "black" }} level={3}>
            My Balance{" "}
          </Title>

          <div
            className="site-layout-content rounded-3"
            style={{ background: "#fff", padding: 24}}
          >
            <strong>My balance : {balance}</strong>
          </div>

          <br />
          <button 
           onClick={() => getBalance()} 
          className="btn btn-primary">
            Get Balance
          </button>
        </Content>{" "}
        <Content style={{ padding: "20px 20px" }}>
          <Title style={{ color: "black" }} level={3}>
            My Offers{" "}
          </Title>

          <div
            className="site-layout-content rounded-3"
            style={{ background: "#fff", padding: "30px" }}
          >
            {/* <div class="row align-items-md-stretch"> */}
            <div class="row">
              <div class="col-md-6">
                <Title style={{ color: "black" }} level={3}>
                  My Earn Offers{" "}
                </Title>
                <div className="p-5 border rounded-3" >
                  {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
                  <div className="row">
                    <CardDashboard
                      title="Adidas"
                      text="You will earn 5 MLT."
                      src={adidas}
                    />
                    <CardDashboard
                      title="Adidas"
                      text="You will earn 5 MLT."
                      src={adidas}
                    />
                    <CardDashboard
                      title="Adidas"
                      text="You will earn 5 MLT."
                      src={adidas}
                    />
                 <CardDashboard
                      title="Adidas"
                      text="You will earn 5 MLT."
                      src={adidas}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <Title style={{ color: "black" }} level={3}>
                  My Redeem Offers{" "}
                </Title>
                <div class="p-5  border rounded-3">
                  {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
                  <div className="row">
                    <CardDashboard
                      title="Adidas"
                      text="You should pay 5 MLT."
                      src={adidas}
                    />
                    <CardDashboard
                      title="Adidas"
                      text="You should pay 5 MLT."
                      src={adidas}
                    />
                    <CardDashboard
                      title="Adidas"
                      text="You should pay 5 MLT."
                      src={adidas}
                    />
                    <CardDashboard
                      title="Adidas"
                      text="You should pay 5 MLT."
                      src={adidas}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>{" "}
      </Layout>
    </div>
  );
}

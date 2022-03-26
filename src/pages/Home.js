import "./Home.css";
import { ethers, provider } from "ethers";
// import { useState , useEffect} from "react";
import background from "/home/dp-dev06/Desktop/seperate-front-hardhat/frontend/src/images/main-bg.png";
import Web3Modal from "web3modal";
import { mltAddress } from "../config.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  // const [loadingstate, setLoadingState] = useState('not-loaded');

  //here we should add two column in first page which shows some of the actives earn and redeem offers.

  // useEffect(() => {
  //   loadOffers()
  // }, [])

  // async function loadOffers(){

  // }
  const [ifWalletExist, setIfWalletExist] = useState();
  useEffect(() => {
    if (window.ethereum) {
      setIfWalletExist(true);
    } else {
      setIfWalletExist(false);
    }
  }, [ifWalletExist]);

  async function connectWallet() {
    // ----------------connceting to web3modal------------------------------------------------
    // const web3Modal = new Web3Modal();
    // const connection = await web3Modal.connect();
    // const provider = new ethers.providers.Web3Provider(connection);
    // const signer = provider.getSigner();
    // console.log(signer);
    // const contract = new ethers.Contract(mltAddress, MLT.abi, signer);
    // console.log(contract);
    // -----------------connceting to metamask wallet extension-----------------------------------------------
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    console.log(account);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Join the future of loyalty</h1>
        <p className="lead">
          We offer a decentralized, globally integrated loyalty program to
          incentivize your customers using blockchain and smart contracts. Grab
          attention to your business by implementing this state-of-the-art
          technology which delivers you a high-tech platform for rewarding and
          retaining customers.
        </p>
      </div>
      <br />
      <div className="text-center">
        {ifWalletExist ? (
          <button onClick={connectWallet} className="btn btn-primary btn-lg">
            Connect Wallet
          </button>
        ) : (
          <a className="btn btn-primary btn-lg" href="/install" role="button">
            Install MetaMask wallet extension
          </a>
        )}
      </div>
    </div>
  );
}

// maximilian

// const confirmDeleteHandler = async () => {
//   setShowConfirmModal(false);
//   try {
//     await sendRequest(
//       `http://localhost:5000/api/places/${props.id}`,
//       'DELETE',
//       null,
//       {
//         Authorization: 'Bearer ' + auth.token
//       }
//     );
//     props.onDelete(props.id);
//   } catch (err) {}
// };

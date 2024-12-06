"use client";
import React from 'react'
import { useState } from "react";
import { useContext } from "react";
import Navbar from '../componants/navbar'
import { WalletContext, WalletContexts } from "../connectWallet";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";


function getProvider() {
    const provider = window.safepalProvider; // Check if SafePal provider is injected
    if (!provider) {
      // If SafePal provider is not found, open the download link
      window.open("https://www.safepal.com/download");
      throw new Error(
        "Please go to our official website to download SafePal wallet."
      );
    }
    return provider;
  }
  const providerOptions = {
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "Web3Modal Demo",
        infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
      },
    },

    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          4002: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL
        },
        bridge: "https://bridge.walletconnect.org", // Default WalletConnect bridge
        qrcode: true, // Show QR code for connection
      },
    },
  };


  const TokenAddress = "0xC9835111bF81861d45Ba82F264621E616b884DD9";
  const TokenABI = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
  const PresaleAddress = "0xb8AF5C755bFe3070458f85fA1279985e3E6A5200";
  const PresaleABI = [{"inputs":[{"internalType":"contract IERC20","name":"_Gonzo","type":"address"},{"internalType":"address payable","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"Buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"EthAmountTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_phase","type":"uint256"}],"name":"Start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Stop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TotalSoldTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"User","outputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_tokenAmountPurchased","type":"uint256"},{"internalType":"uint256","name":"_ethAmount","type":"uint256"},{"internalType":"uint256","name":"Phase","type":"uint256"},{"internalType":"uint256","name":"_timeOfBought","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPhase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseFourTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseOneTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseThreeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseTwoTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
export default function Trade () {
    const { walletAddress, setWalletAddress, signer, setSigner } =
    useContext(WalletContext);
    const [token, setToken] = useState();
    const [presale, setPresale] = useState();
    const [value , setValue] = useState();
    const min = 0.5;
    const max = 50;

    const connectWallet = async () => {
        if (walletAddress) {
            // Disconnect wallet
            setWalletAddress("");
            console.log("Wallet disconnected");
            return;
          }
          try {
            const web3Modal = new Web3Modal({
              cacheProvider: false,
              providerOptions,
            });
      
            const web3modalInstance = await web3Modal.connect();
            const web3modalProvider = new ethers.providers.Web3Provider(
              web3modalInstance
            );
            let provider;
            if (window.safepalProvider) {
              provider = new ethers.providers.Web3Provider(getProvider()); // SafePal provider
            } else {
              // Fallback to Web3Modal provider
              provider = new ethers.providers.Web3Provider(web3modalInstance);
            }
            const signer = web3modalProvider.getSigner();
            console.log(signer);
            setSigner(signer);
            const TokenContract = new ethers.Contract(TokenAddress, TokenABI, provider);
            setToken(TokenContract);
            const name = await token.name()
            const PresaleContract = new ethers.Contract(PresaleAddress, PresaleABI, provider);
            setPresale(PresaleContract);
            const currentPhase = (await presale.currentPhase())
            console.log(`name of contract: ${name}`);
            console.log(`currentPhase of presale: ${currentPhase}`);
            setValue(currentPhase);

            const walletAddres = await signer.getAddress();
            console.log(walletAddres);
            // Update state with wallet details
            setWalletAddress(walletAddres);
          } catch (error) {
            console.log("Error connecting wallet:", error);
          }
    };


const disconnectWallet = async () => {
    const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });

    await web3Modal.clearCachedProvider();
    setWalletAddress(""); // Clear wallet address state
    setSigner(null);      // Clear signer state
    console.log("Wallet disconnected");
};


    function shortenAddress(address) {
        if (!address) return "";
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
      }
  return (
        <div className='bg-[#6c83d6] '>
                <Navbar/>
                <div className="w-full mt-32 place-self-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                {
                    walletAddress? 
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl -mb-6 font-black text-gray-900 text-wider text-center">Purchase</h5>
                        
                            <div>
                                {/* <label htmlFor="email" className="block mb-2 text-sm font-medium  text-gray-900 ">Amount in Ether</label> */}
                                <input 
                                    type="number" name="amount"
                                    id="amount" 
                                    required
                                    min="0.5"
                                    max="200"
                                    step="0.01"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-center" placeholder="ETHER"  />
                            </div>
                        <button
                            type="submit" 
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-wider">
                            BUY
                        </button>
                        <button onClick={disconnectWallet} className="w-full text-white bg-red-800 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-wider" > Disconnect Wallet</button>

                        </form>
                    :
                    <button onClick={connectWallet} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-wider" > {walletAddress ? shortenAddress(walletAddress) : "Please Connect Wallet First"}</button>
                    
                }
                </div> 
                {
                    walletAddress?
                    
                    <div>
                        <div className='mt-10 h-2 z-0 bg-white rounded-lg'></div>
                        <div className="w-full mt-6 place-self-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                            <h1 className='text-xl  font-black text-gray-900 text-wider text-center' >Your Purchases</h1>
                            <div> 
                                {
                                    (value > 0) ?
                                    <div className=' mt-2 mx-2 grid grid-cols-3 gap-3 flex place-content-around max-w-sm  bg-grey-800 place-items-center text-black border border-gray-200 rounded-lg'> 
                                        <div className=''>1 :</div>
                                        <div className="font-extrabold text-center">20000</div>
                                        {/* <a className='p-2'>00:00:00</a> */}
                                        <button className=' p-2 mx-0  bg-green-500 rounded-lg'>Withdraw</button>
                                    </div>
                                    :  <div className='text-center text-black'>Presale is not started yet</div>
                                }

                            </div>
                        </div>
                    </div>
                    
                    :
                    <div></div>
                }
        </div>
  ) 
}

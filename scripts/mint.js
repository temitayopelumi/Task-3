const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = require("web3");
const fs = require('fs');
const path = require("path");


//*vars
const MNEMONIC = "embark flock wear grit gas core sea drama fringe chaos fuel chef"


//* Remember to write the nft address in manually after deploying the contract
const NFT_CONTRACT_ADDRESS = "0xC4B4e0f9703121f4dc7b6D92924066A8740039Ad"
const OWNER_ADDRESS = "0xf009453676ab812C248f6afb43230432fa9cf10E";
const MUMBAI = `wss://rinkeby.infura.io/ws/v3/d4c0f205bb124831ae1a3f4d2d5e06b9`
// const MATIC = `https://rpc-mainnet.maticvigil.com/v1/${API_KEY}`
const NUM_ITEMS = 2;


//*Parse the contract artifact for ABI reference.
let rawdata = fs.readFileSync(path.resolve(__dirname, "../build/contracts/TemiiNFT.json"));
let contractAbi = JSON.parse(rawdata);
const NFT_ABI = contractAbi.abi

async function main() {

  try {
    //*define web3, contract and wallet instances
    const provider = new HDWalletProvider(
      MNEMONIC,
      MUMBAI
    );

    const web3Instance = new web3(provider);

    const nftContract = new web3Instance.eth.Contract(
      NFT_ABI,
      NFT_CONTRACT_ADDRESS,
    );


      //* just mint 
    await nftContract.methods
      .Mint(OWNER_ADDRESS, 0, `QmZqGz1XM7MDbvFAtCicUzUJsnYNG8ApBtiMa5hoHpz2qu`)
      
      .send({ from: OWNER_ADDRESS }).then(console.log('minted')).catch(error => console.log(error));


    //* mint for a certain amount
    /*
    for (var i = 1; i < NUM_ITEMS; i++) {
      await nftContract.methods
        .mintItem(OWNER_ADDRESS, `https://ipfs.io/ipfs/QmZ13J2TyXTKjjyA46rYENRQYxEKjGtG6qyxUSXwhJZmZt/${i}.json`)
        .send({ from: OWNER_ADDRESS }).then(console.log('minted')).catch(error => console.log(error));
    }
    */
  }
  
  catch (e) {
    console.log(e)
  }
}

//invoke
main().then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
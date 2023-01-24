
// ++++++++  Tron Testnet
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
const eventServer = new HttpProvider("https://api.shasta.trongrid.io");
// const privateKey = process.env.REACT_APP_Privatekey;
const privateKey = "89b9546100b202ef63760f391c3877c987864e9dc21c666918d80a0f738c57a6";
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
const USDT_TRON_Contract = "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs"; //testnet USDT contract
const USDFX_TRON_Contract = "TVtVsALPz7RPwdcAMUCtJnq6oQTmWtB2KK";
const USDFX_TRON_WALLET_ADDRESS = "TRME1LFQR13FFJZL2pfHktEUEJxNjxLyrA";

//++++++++  Tron Mainnet

// const TronWeb = require('tronweb');
// const HttpProvider = TronWeb.providers.HttpProvider;
// const fullNode = new HttpProvider("https://api.trongrid.io");
// const solidityNode = new HttpProvider("https://api.trongrid.io");
// const eventServer = new HttpProvider("https://api.trongrid.io");
// // const privateKey = process.env.REACT_APP_Privatekey;
// const privateKey = "bf1d2b85d36f72523786c755c2353a05d3bfe49e4c66d10ea6f74ada51dde0ec";
// const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

// // console.log(tronWeb);
// const USDT_TRON_Contract = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //mainnet USDT contract

// const USDFX_TRON_Contract = "TQVogtjmXmspWLEAdTi3aSkzi6E25qGH3r";
// const USDFX_TRON_WALLET_ADDRESS = "TLCddvfwBJuy54rmyKmNnyupTNSPDErUcZ";

const DoWatch = async()=>{
    const contract = await tronWeb.contract().at(USDT_TRON_Contract);
    await contract && contract.Transfer().watch((err, event) => {
      if(err)
        return console.error('Error with "Message" event:', err);
        
      const amount = event.result.value;
      const RECEVED_ADDRESS = tronWeb.address.fromHex(event.result.to);
      const BUYER_ADDRESS = tronWeb.address.fromHex(event.result.from);
      console.log(event.result.to);
      // console.log(BUYER_ADDRESS);

      if (RECEVED_ADDRESS == USDFX_TRON_WALLET_ADDRESS){  
        console.log("same");      
        awaitResult(BUYER_ADDRESS, amount);
      }
    });
    
}

const awaitResult = async (BUYER_ADDRESS, amount)=> {
    console.log("catch");
    const constract_usdfx =await tronWeb.contract().at(USDFX_TRON_Contract);
    // console.log(constract_usdfx.methods);
    const success = await constract_usdfx.methods.swap(BUYER_ADDRESS, amount).send();
    console.log("success");
    return true;
}

DoWatch();
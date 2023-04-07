require("dotenv").config();
const Web3 = require("web3");

async function readMemslot() {
  const web3 = new Web3(process.env.RPC_URL);

  // https://goerli.etherscan.io/address/0x4A70d6fD646B1C113698F1Bb021aDc0C0c1D40ce#readContract
  let contractAddress = "0x4A70d6fD646B1C113698F1Bb021aDc0C0c1D40ce";

  let result = [];
  for (index = 0; index < 10; index++) {
    result.push(web3.eth.getStorageAt(contractAddress, index));
  }

  let results = await Promise.all(result);
  for (i = 0; i < results.length; i++) {
    console.log(`${i} : ${results[i]}`);
  }

  let slotIndex = 4;

  let passwordSlot = await web3.eth.getStorageAt(contractAddress, slotIndex);
  // 12 in decimal = `0x000000000000000000000000000000000000000000000000000000000000000c` in hexadecimal
  console.log("\npasswordSlot = ", passwordSlot);
}

(async () => {
  await readMemslot();
})();

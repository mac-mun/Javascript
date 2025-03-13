const Web3 = require('web3');

// API Connection

const web3 = new Web3('https://mainnet.infura.io/v3/21c3f6fa7aff432babdd41338d46f67f');

async function getBalance(address) {
    try {
        console.log(`Checking balance for address: ${address}...`);

        // Get Balance in Wei
        const balanceWei = await web3.eth.getBalance(address);

        // Convert Wei to Eth

        const balanceEth = web3.utilis.fromWei(balanceWei, 'ether');

        console.log(`Balance: ${balanceEth} ETH`);
    } catch (error) {
        console.error('Error Fetching Balance:', error.message);
    }
}

//  Example Address

const address = '0xab5801a7d398351b8be11c439e05c5b3259aec9b';
getBalance(address)
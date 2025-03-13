const { ethers } = require('ethers');

// API
const { JsonRpcProvider } = require('ethers')
const provider = new JsonRpcProvider("https://mainnet.infura.io/v3/21c3f6fa7aff432babdd41338d46f67f");

// Function to Fetch and Display Transactions
async function getTransactions(address) {  // Fixed "Transcations" to "Transactions"
    try {
        console.log(`Fetching transactions for address: ${address}...`);  // Fixed "transcations"

        // Get the latest block number
        const latestBlock = await provider.getBlockNumber();
        const startBlock = latestBlock - 1000; // Look back ~1000 blocks

        // Get transaction history
        const history = await provider.getHistory(address, startBlock, latestBlock);

        if (history.length === 0) {
            console.log('No transactions found in the last ~1000 blocks');  // Fixed "transcation"
            return;
        }
        console.log(`Found ${history.length} transactions:`);
        history.forEach((tx, index) => {
            const valueInEth = ethers.utils.formatEther(tx.value);
            console.log(`\nTransaction ${index + 1}:`);
            console.log(`Hash: ${tx.hash}`);  // Added colon for consistency (optional)
            console.log(`From: ${tx.from}`);
            console.log(`To: ${tx.to || 'Contract Creation'}`);
            console.log(`Value: ${valueInEth} ETH`);
            console.log(`Block: ${tx.blockNumber}`);
        });
    } catch (error) {
        console.error('Error fetching transactions:', error.message);  // Capitalized "Fetching" for consistency
    }
}

// Example Ethereum address
const address = "0xab5801a7d398351b8be11c439e05c5b3259aec9b";
getTransactions(address);  // Fixed to match function name
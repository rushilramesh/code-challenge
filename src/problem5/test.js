const { ethers } = require("ethers");
const { abi } = require("./build/contracts/Utility.json")

const ADDR = "0x9EaA54803Bd15eaCA2db625A37761af927178b78";   // your contract address
const ABI = abi;    // your contract ABI

const ADDRESS = "0xDD922c7541667C8A3cEA69aAD5Ec9b268BEAE2E8"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0xaC3D57Df511242Da4C8B45c3da464193cd624B50",
	"0x15fB74F4d828C85a1b71Ac1A83f31E1D2B8Beb73",
	"0xCc7bb2D219A0FC08033E130629C2B854b7bA9195"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider('goerli');

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  	const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances.map(bal => ({
		token: bal.token,
		balance: bal.amount.toString()
	}));
};

test().then(console.log).catch(console.log);

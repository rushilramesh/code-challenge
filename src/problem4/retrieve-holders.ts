import { JsonRpcProvider } from '@ethersproject/providers';
import {ethers, providers, Contract } from 'ethers'

const addresses: string[] = [
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
]

const bscProvider: JsonRpcProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/')
const SWTH_ADDRESS = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468" // Token Contract
const ERC20_ABI = ["function balanceOf(address account) external view returns (uint256)"];

const contract: Contract = new ethers.Contract(SWTH_ADDRESS, ERC20_ABI, bscProvider)

const retreive = async () => {
    for (const address of addresses) {
        const balance: string = await contract.balanceOf(address)
        console.log(address + " " + balance)
    }
}

retreive()
pragma solidity >=0.4.22 <0.9.0;

// Declare interface to call balanceOf function from token contract.
interface IERC20 {
    function balanceOf(address owner)
        external
        view
        returns (uint256 balance);
}

contract Utility {
    struct Token {
        address token;
        uint256 amount;
    }

    function getBalances(address wallet, address[] memory tokenAddresses)
        public
        view
        returns (Token[] memory)
    {
        Token[] memory balances = new Token[](tokenAddresses.length);

        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            address token = tokenAddresses[i];
            uint256 amount = IERC20(token).balanceOf(wallet);
            balances[i] = Token(token, amount);
        }
        return balances;
    }
}

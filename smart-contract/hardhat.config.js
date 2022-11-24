require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/P43QR8gLE2jb7xSVN4a-a8j3vhrRuzjO',
      accounts: [
        'e2f581ceb6141ae6fbafd4a9cd97cd1b249f767a64349dfb8393e63987932325',
      ],
    },
  },
}
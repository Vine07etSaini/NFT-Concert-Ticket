module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777, // Match any network id
      gas: 6721975
    }
  },
  compilers: {
    solc: {
       version: "0.8.9",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};

const {
  async = null,
  binary: _binary = "cored",
  fees = "100000udevcore",
} = argv;

// export const nativeAsset = "udevcore";
export const faucetFundingLimit = 100000000;
export const binary = _binary;
export const keyringFlags = ["--keyring-backend=test"];
export const gasFlags = [`--gas=auto`, `--gas-prices=auto`];
export const feesFlags = [`--gas=250000`, `--fees=${fees}`];
export const jsonFlag = ["--output=json"];
export const blockFlag = ["--broadcast-mode=block"];
export const asyncFlag = ["--broadcast-mode=async"];
export const broadcastFlag = [`--broadcast-mode=${async ? "async" : "block"}`];
export const gasFee = {
  amount: [
    {
      denom: "udevcore",
      amount: "10000000000000",
    },
  ],
  gas: "280000",
};

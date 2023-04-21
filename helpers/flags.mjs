import { getProfile } from "./getProfile.mjs";
import {
  binary,
  keyringFlags,
  gasFlags,
  feesFlags,
  jsonFlag,
  blockFlag,
  asyncFlag,
  broadcastFlag,
} from "./constants.mjs";

const { node, chainId, key, nativeAsset } = await getProfile();

export const queryFlags = [`--node=${node}`, `--chain-id=${chainId}`];

const { height = null, generateOnly = false, json = false } = argv;

if (height) {
  queryFlags.push(`--height=${height}`);
}

if (generateOnly) {
  queryFlags.push(`--generate-only`);
}

if (json) {
  queryFlags.push(`--output=json`);
}

export const flags = [...keyringFlags, ...queryFlags, `--from=${key}`, `-y`];
export const userFlags = [...keyringFlags, ...queryFlags, `-y`];
export {
  nativeAsset,
  binary,
  keyringFlags,
  gasFlags,
  feesFlags,
  jsonFlag,
  blockFlag,
  asyncFlag,
  broadcastFlag,
};

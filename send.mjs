#!/usr/bin/env zx

import parseArgs from "minimist";
import { getProfile } from "./helpers/getProfile.mjs";
import { binary, flags, blockFlag, gasFlags } from "./helpers/flags.mjs";

$.verbose = false;

const argv = parseArgs(process.argv, {
  string: ["sentAmount"],
});

const { address: senderAddress, nativeAsset } = await getProfile();
const { address = null, sentAmount = null, sentAsset = nativeAsset } = argv;

if (!address) {
  console.log(`--address is missing`);
  process.exit();
}

if (!sentAmount) {
  console.log(`--sentAmount is missing`);
  process.exit();
}

$.verbose = true;
await $`${binary} tx bank send ${senderAddress} ${address} ${sentAmount}${sentAsset} ${flags} ${gasFlags} ${blockFlag}`;

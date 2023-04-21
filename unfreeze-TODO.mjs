#!/usr/bin/env zx

import parseArgs from "minimist";
import { getProfile } from "./helpers/getProfile.mjs";
import { binary, flags, blockFlag, gasFlags } from "./helpers/flags.mjs";

$.verbose = false;

const argv = parseArgs(process.argv, {
  string: ["sentAmount"],
});

const { address = null, sentAmount = null } = argv;

if (!address) {
  console.log(`--address is missing`);
  process.exit();
}

if (!sentAmount) {
  console.log(`--sentAmount is missing`);
  process.exit();
}

const { address: senderAddress, nativeAsset: sentAsset } = await getProfile();

$.verbose = true;
await $`${binary} tx bank send ${senderAddress} ${address} ${sentAmount}${sentAsset} ${flags} ${gasFlags} ${blockFlag}`;

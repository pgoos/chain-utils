#!/usr/bin/env zx

$.verbose = false;

import { spinner } from "zx/experimental";
import { binary, feesFlags, flags, blockFlag } from "./helpers/flags.mjs";
import { getBlockHeight } from "./helpers/getBlockHeight.mjs";

const {
  version = null,
  height = null,
  waitNBlocks = 300,
  deposit = "1000000000rowan",
} = argv;

if (!version) {
  console.log("--version is missing");
  process.exit();
}

if (version[0] === "v") {
  console.log("--version should not be prefixed with 'v'.");
  process.exit();
}

let currentHeight = height;
if (!currentHeight) {
  currentHeight = await getBlockHeight();

  if (!currentHeight) {
    console.log(
      "failed to retrieve current block height, use --height instead."
    );
    process.exit();
  }
}

await spinner("Upgrade software                              ", () =>
  within(async () => {
    $.verbose = true;
    await $`\
${binary} tx gov submit-proposal software-upgrade \
  ${version} \
  --deposit=${deposit} \
  --upgrade-height=${currentHeight + waitNBlocks} \
  --title=v${version} \
  --description=v${version} \
  ${flags} \
  ${feesFlags} \
  ${blockFlag} \
    `;
  })
);

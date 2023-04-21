#!/usr/bin/env zx

import { spinner } from "zx/experimental";
import { faucetFundingLimit } from "./helpers/constants.mjs";
import { nativeAsset } from "./helpers/flags.mjs";
import { getProfile } from "./helpers/getProfile.mjs";

$.verbose = true;

const { address: profileAddress, faucetUrl } = await getProfile();
const { amount = 100000000, address = null } = argv; // default 100

const n = Math.round(amount / faucetFundingLimit);

await spinner(
  `Request ${amount}${nativeAsset} with faucet                             `,
  () =>
    within(async () => {
      for (let i = 0; i < n; i++) {
        console.log(`faucet request ${i}/${n}                                       `);
        await $`curl --location --request POST '${faucetUrl}' --header 'Content-Type: application/json' --data-raw '{ "address": "${address ? `${address}` : `${profileAddress}`}" }'`;
      }
    })
);

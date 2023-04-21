#!/usr/bin/env zx

$.verbose = false;

import { spinner } from "zx/experimental";
import { binary, userFlags, gasFlags, blockFlag } from "./helpers/flags.mjs";
import { getProfile } from "./helpers/getProfile.mjs";

const { address: defaultAddress, nativeAsset } = await getProfile();
const {
  title = "Test proposal",
  description = "This is a test proposal",
  address = defaultAddress,
} = argv;

await spinner("submit proposal                              ", () =>
  within(async () => {
    $.verbose = true;
    await $`
${binary} tx gov submit-proposal \
  --title=${title} --description=${description} --type=text \
  --deposit=10${nativeAsset} --from=${address} ${userFlags} ${gasFlags} ${blockFlag}
    `;
  })
);

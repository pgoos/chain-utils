#!/usr/bin/env zx

$.verbose = false;

import { spinner } from "zx/experimental";
import { binary, keyringFlags } from "./helpers/constants.mjs";
import { getProfile } from "./helpers/getProfile.mjs";

const { key, mnemonic, chainId } = await getProfile();

await spinner("import key                              ", () =>
  within(async () => {
    // $.verbose = true;
    await $`echo ${mnemonic} | ${binary} keys add ${key} --recover ${keyringFlags} --chain-id ${chainId}`;
  })
);

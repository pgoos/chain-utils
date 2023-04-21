#!/usr/bin/env zx

import { binary, queryFlags } from "./helpers/flags.mjs";
import { getProfile } from "./helpers/getProfile.mjs";

$.verbose = true;

const { address: adminAddress } = await getProfile();

const { address, denom = null } = argv;

await $`${binary} q bank balances ${
  address ? address : adminAddress
} ${queryFlags} --limit=1000 --count-total ${denom ? `--denom=${denom}` : ``}`;

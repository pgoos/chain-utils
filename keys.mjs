#!/usr/bin/env zx

import { binary, keyringFlags } from "./helpers/constants.mjs";

$.verbose = true;

await $`${binary} keys list ${keyringFlags}`;

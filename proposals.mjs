#!/usr/bin/env zx

import { binary, queryFlags } from "./helpers/flags.mjs";

$.verbose = true;

await $`${binary} q gov proposals ${queryFlags}`;

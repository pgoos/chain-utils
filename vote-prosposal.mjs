#!/usr/bin/env zx

$.verbose = false;

import { spinner } from "zx/experimental";
import { binary, feesFlags, flags, blockFlag } from "./helpers/flags.mjs";

const { id = "1", decision = "yes" } = argv;

await spinner("Vote proposal                              ", () =>
  within(async () => {
    $.verbose = true;
    await $`\
${binary} tx gov vote \
  ${id} \
  ${decision} \
  ${flags} \
  ${feesFlags} \
  ${blockFlag} \
    `;
  })
);

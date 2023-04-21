#!/usr/bin/env zx

$.verbose = false;

import { spinner } from "zx/experimental";

const { sifnodePath = null, s = null, featureToggles = null, f = null } = argv;

if (!s && !sifnodePath) {
  console.log(`--sifnodePath or -s is missing`);
  process.exit();
}

const path = s || sifnodePath;
const toggles = f || featureToggles;

await spinner("install                              ", () =>
  within(async () => {
    // $.verbose = true;
    cd(path);
    if (toggles) {
      toggles.split(",").forEach((featureToggle) => {
        process.env[featureToggle] = "1";
      });
    }
    await $`make clean install`;
  })
);

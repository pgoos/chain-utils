#!/usr/bin/env zx

$.verbose = false;

import { spinner } from "zx/experimental";
import { binary } from "./helpers/constants.mjs";

const { HOME } = process.env;

await spinner(`clean $HOME/.${binary}                             `, () =>
  within(async () => {
    // $.verbose = true;
    await $`rm -rf ${HOME}/.${binary}`;
  })
);

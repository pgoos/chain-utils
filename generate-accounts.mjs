#!/usr/bin/env zx

const fs = require("fs");

$.verbose = true;
const { noAccounts = 200 } = argv;

const accounts = [];

for (let i = 51; i <= noAccounts; i++) {
  const { stdout: output } =
    await $`cored keys add coreum-testing-${i} --output json --keyring-backend=test`;
  const { name, address, mnemonic } = JSON.parse(output);
  accounts.push({ name, address, mnemonic });
}

fs.writeFileSync("cored-accounts.json", JSON.stringify(accounts));

module.exports = {
  extends: ["standard", "eslint-config-prettier"],
  globals: {
    $: true,
    argv: true,
  },
  rules: {
    "import/first": "off",
  },
};

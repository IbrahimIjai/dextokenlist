const { version } = require("../package.json");
const { sortTokens } = require("../builder/index");
const opbnbtestnet = require("../tokens/opbnbtestnet.json");
// const ropsten = require("../tokens/ropsten.json");
// const rinkeby = require("../tokens/rinkeby.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Arica testnet",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/art/master/sushi/logo-256x256.png",
    keywords: ["aricvatestnet", "default"],
    tokens: sortTokens([
      ...opbnbtestnet,
    ]),
  };
};

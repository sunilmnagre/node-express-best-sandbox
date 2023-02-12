const { encrypto } = require("./crypto-manager");

if (!process.env.TOKEN) {
  console.error("Must provide TOKEN string as a env variable");
} else {
  console.log(encrypto(process.env.TOKEN));
}

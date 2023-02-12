const crypto = require("crypto");
const config = require("config");

const [ALGORITHM, ENCODING] = ["aes-256-cbc", "base64"];
const KEY = Buffer.from(config.vault.key, ENCODING);
const IV = config.vault.iv;

/**
 *
 * Encrypt the string using AES 256 Algorithm
 * @param {String} string - Plain string
 * @returns {String} string - Converted string
 */
const encrypto = (string) => {
  let encipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
  let buffer = Buffer.concat([encipher.update(string), encipher.final()]);
  return buffer.toString("base64");
};

/**
 *
 * Decrypt the string using AES 256 Algorithm
 * @param {String} string - Encrypted string
 * @returns {String} string - Converted string
 */
const decrypto = (string) => {
  let decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
  let buffer = Buffer.concat([
    decipher.update(Buffer.from(string, ENCODING)),
    decipher.final(),
  ]);
  return buffer.toString();
};

module.exports = {
  encrypto,
  decrypto,
};

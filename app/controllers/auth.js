"use strict";

const { decrypto, encrypto } = require("../../shared/crypto-manager");

/**
 * Create token in the system
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @return {json} Error object or call next function
 */
const authentication = async (request, response) => {
  try {
    let { _Identity } = request.body;

    // Lets decrypt the encrypted idendity
    _Identity = decrypto(_Identity);

    // Now verify the provided identify
    if (verify(_Identity)) {
      const polindromeNum = generatePalindromes();
      return response.jsend.success(encrypto(polindromeNum.toString()));
    }

    return response.status(401).jsend.fail("Invalid Identity");
  } catch (error) {
    console.error(error);
    return response.status(403).jsend.fail("Forbidden");
  }
};

/**
 * Authorize the User in the system by token
 * @param {Object} request The Standard ExpressJS request
 * @param {Object} response The Standard ExpressJS request
 * @return {json} Error object or call next function
 */
const authorization = async (request, response, next) => {
  try {
    // Lets verify the token
    let token = decrypto(request.headers.csrf);

    if (isPalindromeNumber(parseInt(token))) {
      return next();
    }
  } catch (error) {
    console.error(error);
    return response.status(403).jsend.fail("Authorization failed");
  }
};

/**
 * Verify the token
 * @param {String} token Token string for the verification
 * @return {boolean} True or False
 */
const verify = (token) => {
  // convert string to an array
  const arrayValues = token.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join("");

  if (token == reverseString) {
    return true;
  }
  return false;
};

const isPalindromeNumber = (n) => {
  // Find the appropriate divisor to extract the leading digit
  let divisor = 1;
  while (parseInt(n / divisor) >= 10) divisor *= 10;

  while (n != 0) {
    let leading = parseInt(n / divisor);
    let trailing = n % 10;

    // If first and last digit
    // not same return false
    if (leading != trailing) return false;

    // Removing the leading and trailing
    // digit from number
    n = parseInt((n % divisor) / 10);

    // Reducing divisor by a factor
    // of 2 as 2 digits are dropped
    divisor = divisor / 100;
  }
  return true;
};

function generatePalindromes() {
  let randomNumber = 11 + Math.floor(Math.random() * (10000 - 11 + 1));
  let palindrome = randomNumber;

  // Creates palindrome by just appending
  // reverse of number to itself
  while (randomNumber > 0) {
    palindrome = palindrome * 10 + (randomNumber % 10);
    randomNumber = parseInt(randomNumber / 10, 10);
  }
  return palindrome;
}

module.exports = {
  authentication,
  authorization,
};

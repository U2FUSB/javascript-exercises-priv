/**@param {string} word */
const palindromes = function (word) {
    console.log(word === word.split("").reverse().join(""));
};

palindromes("racecar"); // true
palindromes("tacos"); // false

// Do not edit below this line
module.exports = palindromes;

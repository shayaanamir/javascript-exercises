const palindromes = function (s) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"

    const str = s.toLowerCase().split('').filter((char)=>alphanumeric.includes(char)).join('')

    const reverseStr = str.split('').reverse().join('')

    return str == reverseStr
};

// Do not edit below this line
module.exports = palindromes;

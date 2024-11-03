const reverseString = function(s) {

    let result = ""

    for(let i = s.length-1; i >= 0; i--){
        result = result + s[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

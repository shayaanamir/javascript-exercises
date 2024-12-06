const removeFromArray = function(arr, ...args) {

    let resultArr = []

    for(let i = 0; i < arr.length; i++)
    {
        if(args.includes(arr[i])){
            continue;
        }
        resultArr.push(arr[i])
    }
    return resultArr

};

// Do not edit below this line
module.exports = removeFromArray;

const repeatString = function(s, num) {
    let result = ""

    if( num >= 0){
        for(let i = 0; i < num; i++){   
            result += s;
        }
        return result;
    }
    else{
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function( a, b) {
    let sum = 0
    let min, max

    if(Number.isInteger(a) && Number.isInteger(b) && a > 0 && b >0){
        if(a > b){
            min = b
            max = a
        }
        else{
            min = a
            max = b
        }
        
        for(let i = min; i <= max; i++){
            sum += i
        }
    
        return sum
    }
    else{
        return 'ERROR'
    }
    

};

// Do not edit below this line
module.exports = sumAll;

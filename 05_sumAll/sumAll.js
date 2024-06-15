const sumAll = function(a,b) {
    if(a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR";
    start=Math.min(a,b);
    end=Math.max(a,b);
    let sum=0;
    while(start<=end){
        sum+=start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

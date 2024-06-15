const reverseString = function(str) {
    let temp="";
    i=str.length
    while(i--){
        temp+=str[i];
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;

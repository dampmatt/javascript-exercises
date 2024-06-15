const repeatString = function(word,num) {
    if(num<0)
        return "ERROR";
    let str="";
    let i=0;
    while(i<num){
        str+=word;  
        i++;  
    }
    // console.log(num);
    return str;
};

// Do not edit below this line
module.exports = repeatString;

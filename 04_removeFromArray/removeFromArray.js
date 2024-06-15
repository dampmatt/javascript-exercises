const removeFromArray = function(arr,ele) {
    let temp= [1,2,3,4];
    for(const i of arr){
        if(i!=ele)
            temp+=i;
        // console.log(i+" ");
    }
    console.log(typeof(temp));
    return arr;
};

removeFromArray([1,2,4,3],3);
// Do not edit below this line
module.exports = removeFromArray;

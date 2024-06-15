const removeFromArray = function(arr,...args) {
    let temp= [];
    arr.forEach(item => {
        if(!args.includes(item)){
            temp.push(item);
        }
    });
    return temp;
};

// removeFromArray([1,2,3,4],3);
// Do not edit below this line
module.exports = removeFromArray;

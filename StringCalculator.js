function add (number){
    if(number == "")
    return 0;

    if(number.includes(","))
    {
        if(number.includes("\n"))
        {
            var numberArray = number.replace(/\n/g, ",").split(",");
            return sum(numberArray);
        }

        var numberArray = number.split(",");
    
        return sum(numberArray);
    }
  
    else 
        return parseInt(number);
}

function sum(numberArray){
var total = 0;
for(var i = 0; i < numberArray.length; i++){
    total += parseInt(numberArray[i]);
}
    return total;
}
module.exports = add;
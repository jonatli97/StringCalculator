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
        if(number.includes("-")){
            var negatives = [];
            var tmpArr = number.split(",");
            for(var i = 0; i < tmpArr.length; i++)
            {
                if(tmpArr[i].includes("-")){
                    negatives.push(tmpArr[i]);
                }
            }
            return "Negatives not allowed: " + negatives;
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
    if(numberArray[i] <= 1000){
        total += parseInt(numberArray[i]);
    }
    }
    return total;
}



module.exports = add;

function add(number1 : number, number2 : number){
    return number1 + number2;
}

function subtract(number1 : number, number2: number){
    return number1 - number2;
}


function multiply(number1 : number, number2 : number){
    return number1 * number2;
}

function divide(number1 : number, number2: number){
    return number1 / number2;
}

function pow(base: number, exponent: number){
    if(exponent === 0){
        return 1;
    }
    else{
        let result = 1;
        for(var i = 0; i < exponent; i++){
            result *= base;
        }
        return result;
    }
}

function factorial(num : number){

    if(num !== 0){
        let result = 1;
        for(var i = num; i > 0; i--){
            result *= i;
        }
        return result;
    }
    return 1;


}
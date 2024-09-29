function calculateArithmetic(a,b,calc){
    return calc(a,b)
}
function sum(a,b){
    let sum = a+b;
    return sum;
}
function minus(a,b){
    let minus = a-b;
    return minus;
}

let value = calculateArithmetic(2,3,minus);
console.log(value);
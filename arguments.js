function addNumb(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element; 
    }
    return sum;
}

let result = addNumb(4, 5, 8, 12, 33);
console.log(result);

//arguments is an array like object. We can't use push, pop, unshift, shift in arguments where we can use these in array.